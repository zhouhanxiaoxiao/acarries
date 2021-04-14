package com.cibr.acarries.controller;

import com.cibr.acarries.Util.CommonUtil;
import com.cibr.acarries.Util.PDFUtil;
import com.cibr.acarries.Util.SvgUtil;
import com.cibr.acarries.config.CarrierConfig;
import com.cibr.acarries.config.CarrierField;
import com.cibr.acarries.config.GbField;
import com.cibr.acarries.config.ShowEntryConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import org.apache.commons.io.FileUtils;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.*;

@Controller
public class CarrierController {

    @Value("${carrier.filePath}")
    private String defaultFilePath;

    @Value("${carrier.fontSimsun}")
    private String fontSimsun;

    @Value("${carrier.carrier}")
    private String carrierFtl;

    @Autowired
    private CarrierConfig carrierConfig;

    @RequestMapping(value = "/snapGene/load_gb_data",method = RequestMethod.POST)
    @ResponseBody
    public String adminLoadGbsPost(HttpServletRequest request) throws IOException {
        MultipartFile all = ((MultipartHttpServletRequest) request).getFile("all");
        MultipartFile excl = ((MultipartHttpServletRequest) request).getFile("excl");
        //获取mongodb信息
        MongoCollection<Document> listCollection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        MongoCollection<Document> gbCollection = carrierConfig.getMongodbCollection(carrierConfig.getGbfileCollection());
        MongoCollection<Document> searchCollection = carrierConfig.getMongodbCollection(carrierConfig.getSearchCollection());
        MongoCollection<Document> showList = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());
        //转存并解压zip
        String zipName = CommonUtil.UUID() + all.getOriginalFilename();
        File newZip = new File(defaultFilePath + zipName);
        FileUtils.copyInputStreamToFile(all.getInputStream(),newZip);
        CommonUtil.unPackZip(newZip,defaultFilePath);
        //转存Excel文件。
        String fileName = CommonUtil.UUID() + excl.getOriginalFilename();
        File newFile = new File(defaultFilePath + fileName);
        if (!newFile.exists()){
            newFile.createNewFile();
        }
        FileUtils.copyInputStreamToFile(excl.getInputStream(),newFile);

        //解析Excel文件。
        Map<String, List<List<String>>> allWorkSheet = CommonUtil.getAllWorkSheet(newFile);
        // 所有质粒集合
        List<Document> list = new ArrayList<>();
        // 所有gb文件解析集合
        List<Document> gbList = new ArrayList<>();
        // 所有筛选条件集合
        Map<String, Set<String>> searchList = new HashMap<>();
        FindIterable<Document> documents = searchCollection.find();
        MongoCursor<Document> iterator = documents.iterator();
        while (iterator.hasNext()){
            Document next = iterator.next();
            List<String> values = (List<String>) next.get("values");
            Set<String> vals = new HashSet<>();
            if (values != null && values.size()>0){
                values.forEach(item->{vals.add(item);});
            }
            searchList.put((String) next.get(ShowEntryConfig.FILED), vals);
        }
         Map<String ,Document> showMap = new HashMap<>();
        FindIterable<Document> showListDoc = showList.find();
        MongoCursor<Document> showListIt = showListDoc.iterator();
        while (showListIt.hasNext()){
            Document next = showListIt.next();
            showMap.put(next.getString(ShowEntryConfig.FILED), next);
        }
        String error = "";
        //遍历工作表
        for (String key : allWorkSheet.keySet()){
            if ("All list".equals(key)){
                //跳过总表
                continue;
            }
            List<String> titleList = new ArrayList<>();
            //获取当前工作表内容
            List<List<String>> lists = allWorkSheet.get(key);
            for (List<String> row : lists){
                //遍历当前工作表内容
                if (row.get(0).contains("Box")){
                    //处理标题行
                    row.forEach(title ->{
                        if (!StringUtils.isEmpty(title)){
                            titleList.add(title.replaceAll("\\s","").replaceAll("\\.","").replaceAll("#","").toUpperCase());
                        }
                    });
                    continue;
                }
                if (row.size() == 0 || row.get(0).contains("pLenti") || "".equals(row.get(0).trim())){
                    //跳过特殊行：标题行
                    continue;
                }
                // 获取质粒信息
                Document document = CommonUtil.handleSheet(key, row, titleList);
                if (StringUtils.isEmpty(document.get(CarrierField.NAME))){
                    continue;
                }
                list.add(document);
                // 保存所有筛选条件
                CommonUtil.saveSearchItem(searchList,document,titleList);
                // 解析.gb文件，转存.dna文件
                String filePathName = defaultFilePath + File.separator + document.get(CarrierField.CAT) + " " + document.get(CarrierField.NAME);
                File gbFile = new File(filePathName + ".gb");
                if (gbFile.exists()){
                    Document gbDocument = CommonUtil.readGbFile(gbFile,document);
                    gbList.add(gbDocument);
                }else {
                    error += filePathName + "        ------》》》不存在！\n";
                }
            }
        }
        if (list.size() > 0){
            listCollection.insertMany(list);
        }
        if (gbList.size()>0){
            gbCollection.insertMany(gbList);
        }
        List<Document> searchDocus = new ArrayList<>();
        for (String key : searchList.keySet()){
            Document searchDocu = new Document();
            searchDocu.append("field",key);
            searchDocu.append("values",searchList.get(key));
            searchDocus.add(searchDocu);
            if (!showMap.containsKey(key)){
                Document newShow = new Document();
                newShow.append(ShowEntryConfig.FILED,key)
                        .append(ShowEntryConfig.PDF_POSITION,"none")
                        .append(ShowEntryConfig.PAGE_SHOW, false);
                showMap.put(key,newShow);
            }
        }
        searchCollection.drop();
        showList.drop();
        List<Document> newShowListDocs = new ArrayList<>();
        for (String key : showMap.keySet()){
            newShowListDocs.add(showMap.get(key));
        }
        showList.insertMany(newShowListDocs);
        if (searchDocus != null && searchDocus.size() > 0){
            searchDocus.sort(new Comparator<Document>() {
                @Override
                public int compare(Document o1, Document o2) {
                    String field1 = (String) o1.get("field");
                    String field2 = (String) o2.get("field");
                    int index = 0;
                    while (index < field1.length() && index < field2.length()){
                        char char1 = field1.charAt(index);
                        char char2 = field2.charAt(index);
                        if (char2 != char1){
                            return char1 - char2;
                        }
                        index ++;
                    }
                    return field1.length() - field2.length();
                }
            });
            searchCollection.insertMany(searchDocus);
        }
        if ("".equals(error)){
            return "success";
        }else {
            return  error;
        }
    }



    @RequestMapping(value = "/snapGene/initPage",method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> initPage(HttpServletRequest request,
                                        @RequestBody Map requestBody){
        Map<String, Object> retMap = new HashMap<>();
        String flag = (String) requestBody.get("id");
        MongoCollection<Document> collection = carrierConfig.getMongodbCollection(carrierConfig.getGbfileCollection());
        MongoCollection<Document> carrierCollection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        MongoCollection<Document> showConfigList = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());

        FindIterable<Document> name = null;
        if (StringUtils.isEmpty(flag)){
            name = collection.find();
        }else {
            name = collection.find(Filters.eq(GbField.gbId, flag));
        }
        MongoCursor<Document> iterator = name.iterator();
        Document feature = null;
        while (iterator.hasNext()){
            feature = iterator.next();
            break;
        }
        String gbid = (String) feature.get(GbField.gbId);
        FindIterable<Document> carriers = carrierCollection.find(Filters.eq(CarrierField.ID, gbid));
        MongoCursor<Document> carrIt = carriers.iterator();
        Document carrier = null;
        while (carrIt.hasNext()){
            carrier = carrIt.next();
        }

        FindIterable<Document> showConfigsDocs = showConfigList.find();
        MongoCursor<Document> showConfigIt = showConfigsDocs.iterator();
        Map<String,Document> showConfigMap = new HashMap<>();
        while (showConfigIt.hasNext()){
            Document next = showConfigIt.next();
            showConfigMap.put(next.getString(ShowEntryConfig.FILED),next);
        }

        retMap.put("feature", feature);
        retMap.put("showConfigMap", showConfigMap);
        retMap.put("carrier", carrier);
        return retMap;
    }

    @RequestMapping(value = "/snapGene/allFile",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> allFile(){
        MongoCollection<Document> collection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        MongoCollection<Document> searchList = carrierConfig.getMongodbCollection(carrierConfig.getSearchCollection());

        FindIterable<Document> name = collection.find();
        MongoCursor<Document> iterator = name.iterator();
        List<Document> allFile = new ArrayList<>();
        while (iterator.hasNext()){
            allFile.add(iterator.next());
        }

        List<Document> searchs = new ArrayList<>();
        FindIterable<Document> searchDocu = searchList.find();
        MongoCursor<Document> searchIt = searchDocu.iterator();
        while (searchIt.hasNext()){
            searchs.add(searchIt.next());
        }
        Map<String,Object> retMap = new HashMap<>();
        retMap.put("all",allFile);
        retMap.put("search",searchs);
        return retMap;
    }

    @RequestMapping(value = "/snapGene/exportFile")
    public ResponseEntity<?> exportFile(HttpServletRequest request,
                                        HttpServletResponse response,
                                        @RequestBody Map requestBody) throws Exception {
        String id = (String) requestBody.get("id");
        String svgBase64 = (String) requestBody.get("svgBase64");
        String svgWidth = (String) requestBody.get("svgWidth");
        String svgHeight = (String) requestBody.get("svgHeight");

        // fill 的属性 transparent 不能识别，替换为none
        svgBase64 = svgBase64.replaceAll("transparent","none");
        String tmpName = CommonUtil.UUID() + ".png";
        File tmpPng = new File(defaultFilePath + "/image/" + tmpName);
        // 转存图片
        SvgUtil.convert2Png(svgBase64,tmpPng,svgWidth,svgHeight);

        // 获取载体详情
        MongoCollection<Document> carrierCollection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        MongoCollection<Document> showConfigCollection = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());

        FindIterable<Document> carriers = carrierCollection.find(Filters.eq(CarrierField.ID, id));
        MongoCursor<Document> carrIt = carriers.iterator();
        Document carrier = null;
        while (carrIt.hasNext()){
            carrier = carrIt.next();
            break;
        }

        Map<String,Document> showConfig = new HashMap<>();
        FindIterable<Document> showConfigDocs = showConfigCollection.find();
        MongoCursor<Document> showConfigIt = showConfigDocs.iterator();
        while (showConfigIt.hasNext()){
            Document next = showConfigIt.next();
            showConfig.put(next.getString(ShowEntryConfig.FILED),next);
        }

        HttpHeaders headers = new HttpHeaders();
        // 载体为空直接返回异常
        if(carrier != null){
            // 构建ftl数据
            Map<String,Object> data = new HashMap<>();
            List<Map<String,String>> fixRow = new ArrayList<>();
            List<Map<String,String>> activityRow = new ArrayList<>();
            int index = 0;
            Map<String,String> actMap = null;
            for (String key : carrier.keySet()){
                if (showConfig.get(key) != null){
                    String pdfPosition = showConfig.get(key).getString(ShowEntryConfig.PDF_POSITION);
                    if ("fix".equals(pdfPosition)){
                        Map<String,String> kv = new HashMap<>();
                        kv.put("title",key);
                        kv.put("value",carrier.getString(key));
                        fixRow.add(kv);
                    }else if ("activity".equals(pdfPosition)){
                        if (index % 2 == 0){
                            if (actMap != null){
                                activityRow.add(actMap);
                            }
                            actMap = new HashMap<>();
                            actMap.put("title1",key);
                            actMap.put("value1",carrier.getString(key));
                        }else {
                            actMap.put("title2",key);
                            actMap.put("value2",carrier.getString(key));
                        }
                        index++;
                    }
                }
            }
            if (actMap != null){
                activityRow.add(actMap);
            }
            data.put("fixRow",fixRow);
            data.put("activityRow",activityRow);
            data.put("tmpName",tmpName);
            // ftl 转换为 html
            String htmlStr = PDFUtil.freemarkerRender(data, carrierFtl);
            // html 转为 pdf
            byte[] pdfBytes = PDFUtil.createPDF(htmlStr, fontSimsun, defaultFilePath);
            if (pdfBytes != null && pdfBytes.length > 0){
                String fileName = carrier.getString(CarrierField.CAT) + "_" + carrier.getString(CarrierField.NAME) + ".pdf";
                headers.setContentDispositionFormData("attachment", fileName);
                headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
                return new ResponseEntity<byte[]>(pdfBytes,headers, HttpStatus.OK);
            }else {
                return new ResponseEntity<String>("{ \"code\" : \"404\", \"message\" : \"not found\" }",headers, HttpStatus.OK);
            }
        }else {
            return new ResponseEntity<String>("{ \"code\" : \"404\", \"message\" : \"not found\" }",headers, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/snapGene/downLoad", method = RequestMethod.POST)
    public void downloadFile(HttpServletRequest request, HttpServletResponse response,@RequestBody Map requestBody) throws Exception {
        String fileId = (String) requestBody.get("fileId");
        if (fileId != null) {
            MongoCollection<Document> mongodbCollection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
            FindIterable<Document> documents = mongodbCollection.find(Filters.eq(CarrierField.ID, fileId));
            MongoCursor<Document> iterator = documents.iterator();
            String fileName = "";
            while (iterator.hasNext()){
                Document next = iterator.next();
                fileName = (String) next.get(CarrierField.CAT) + " " + (String) next.get(CarrierField.NAME);
                break;
            }
            if (StringUtils.isEmpty(fileName)){
                throw new Exception("未找到对应文件");
            }
            //设置文件路径
            File file = new File(defaultFilePath + fileName + ".dna");
            //File file = new File(realPath , fileName);
            if (file.exists()) {
                response.setContentType("application/force-download");// 设置强制下载不打开
                response.addHeader("Content-Disposition", "attachment;fileName=" + fileName + ".dna");// 设置文件名
                byte[] buffer = new byte[1024];
                FileInputStream fis = null;
                BufferedInputStream bis = null;
                try {
                    fis = new FileInputStream(file);
                    bis = new BufferedInputStream(fis);
                    OutputStream os = response.getOutputStream();
                    int i = bis.read(buffer);
                    while (i != -1) {
                        os.write(buffer, 0, i);
                        i = bis.read(buffer);
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (bis != null) {
                        try {
                            bis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
    }
    @RequestMapping(value = "/snapGene/admin", method = RequestMethod.GET)
    public String snapGeneAdmin(){
        return "snapGeneAdmin";
    }

    @RequestMapping(value = "/snapGene/adminInit", method = RequestMethod.POST)
    @ResponseBody
    public Map snapGeneAdminInit(){
        Map<String ,Object> retMap = new HashMap<>();
        MongoCollection<Document> showListTable = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());
        List<Document> searchs = new ArrayList<>();
        FindIterable<Document> searchDocu = showListTable.find();
        MongoCursor<Document> searchIt = searchDocu.iterator();
        while (searchIt.hasNext()){
            searchs.add(searchIt.next());
        }
        retMap.put("showList",searchs);
        return retMap;
    }

    @RequestMapping(value = "/snapGene/saveShowList", method = RequestMethod.POST)
    @ResponseBody
    public Map saveShowList(@RequestBody Map requestBody) throws JsonProcessingException {
        String showList = (String) requestBody.get("showList");
        Map<String ,Object> retMap = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        List list = objectMapper.readValue(showList, List.class);
        MongoCollection<Document> showListTable = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());
        if (list != null && list.size() > 0){
            list.forEach(item ->{
                Map<String, Object> itemObj = (Map<String, Object>) item;
                showListTable.updateOne(Filters.eq(ShowEntryConfig.FILED, itemObj.get(ShowEntryConfig.FILED)),
                        new Document("$set",new Document(ShowEntryConfig.PAGE_SHOW,itemObj.get(ShowEntryConfig.PAGE_SHOW))));
            });
        }
        return retMap;
    }

    @RequestMapping(value = "/snapGene/savePdfConfig", method = RequestMethod.POST)
    @ResponseBody
    public Map savePdfConfig(@RequestBody Map requestBody) throws JsonProcessingException {
        String fixList = (String) requestBody.get("fixList");
        String activityList = (String) requestBody.get("activityList");
        Map<String ,Object> retMap = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        List fixs = objectMapper.readValue(fixList, List.class);
        List activities = objectMapper.readValue(activityList, List.class);
        MongoCollection<Document> showListTable = carrierConfig.getMongodbCollection(carrierConfig.getPageShowCollection());
        Map<String,Object> fixMap = new HashMap<>();
        if (fixs != null && fixs.size() > 0){
            fixs.forEach(item ->{
                if (item != null){
                    Map<String, Object> itemObj = (Map<String, Object>) item;
                    fixMap.put((String) itemObj.get(ShowEntryConfig.FILED),itemObj);
                }
            });
        }

        Map<String,Object> activityMap = new HashMap<>();
        if (activities != null && activities.size() > 0){
            activities.forEach(item ->{
                if (item != null){
                    Map<String, Object> itemObj = (Map<String, Object>) item;
                    activityMap.put((String) itemObj.get(ShowEntryConfig.FILED), itemObj);
                }
            });
        }

        for (String key : fixMap.keySet()){
            Map<String,Object> activity = (Map<String, Object>) activityMap.get(key);
            Map<String,Object> fix = (Map<String, Object>) fixMap.get(key);
            Boolean actFlag = (Boolean) activity.get(ShowEntryConfig.PDF_POSITION);
            Boolean fixFlag = (Boolean) fix.get(ShowEntryConfig.PDF_POSITION);
            if (actFlag){
                showListTable.updateOne(Filters.eq(ShowEntryConfig.FILED, activity.get(ShowEntryConfig.FILED)),
                        new Document("$set",new Document(ShowEntryConfig.PDF_POSITION,"activity")));
            }else if (fixFlag){
                showListTable.updateOne(Filters.eq(ShowEntryConfig.FILED, fix.get(ShowEntryConfig.FILED)),
                        new Document("$set",new Document(ShowEntryConfig.PDF_POSITION, "fix")));
            }else {
                showListTable.updateOne(Filters.eq(ShowEntryConfig.FILED, fix.get(ShowEntryConfig.FILED)),
                        new Document("$set",new Document(ShowEntryConfig.PDF_POSITION, "none")));
            }
        }
        return retMap;
    }

    @RequestMapping(value = "/snapGene/commitCarrier", method = RequestMethod.POST)
    @ResponseBody
    public Map commitCarrier(HttpServletRequest request, HttpServletResponse response,@RequestBody Map requestBody) throws JsonProcessingException {
        String carrier = (String) requestBody.get("carrier");
        Map<String ,Object> retMap = new HashMap<>();
        ObjectMapper objectMapper = new ObjectMapper();
        Map map = objectMapper.readValue(carrier, Map.class);
        MongoCollection<Document> carrierTable = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        for (Object key : map.keySet()){
            carrierTable.updateOne(Filters.eq(CarrierField.ID, (String) map.get("id")),
                    new Document("$set",new Document((String) key,map.get(key))));
        }
        return retMap;
    }

    @RequestMapping(value = "/snapGene/deleteCarrier", method = RequestMethod.POST)
    @ResponseBody
    public Map deleteCarrier(HttpServletRequest request, HttpServletResponse response,@RequestBody Map requestBody) {
        String fileId = (String) requestBody.get("fileId");
        Map<String ,Object> retMap = new HashMap<>();
        MongoCollection<Document> carrierTable = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        Document oneAndDelete = carrierTable.findOneAndDelete(Filters.eq(CarrierField.ID, fileId));
        System.out.println(oneAndDelete);

        MongoCollection<Document> gbTable = carrierConfig.getMongodbCollection(carrierConfig.getGbfileCollection());
        gbTable.findOneAndDelete(Filters.eq(GbField.gbId,fileId));
        return retMap;
    }

    @RequestMapping(value = "/snapGene/replaceDna")
    @ResponseBody
    public Map replaceDna(HttpServletRequest request,
                          HttpServletResponse response) throws Exception {
        MultipartFile all = ((MultipartHttpServletRequest) request).getFile("file");
        String fileId = request.getParameter("id");
        Map<String ,Object> retMap = new HashMap<>();

        //转存并解压zip
        String zipName = CommonUtil.UUID() + all.getOriginalFilename();
        File newZip = new File(defaultFilePath + zipName);
        FileUtils.copyInputStreamToFile(all.getInputStream(),newZip);
        CommonUtil.unPackZip(newZip,defaultFilePath);

        MongoCollection<Document> carrierCollection = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        FindIterable<Document> documents = carrierCollection.find(Filters.eq(CarrierField.ID, fileId));
        List<Document> carriers = CommonUtil.coventToList(documents);
        if (carriers.size() == 0){
            retMap.put("flag","error");
            retMap.put("error","no such carrier");
        }else {
            Document document = carriers.get(0);
            String filePathName = defaultFilePath + File.separator + document.get(CarrierField.CAT) + " " + document.get(CarrierField.NAME);
            File gbFile = new File(filePathName + ".gb");
            if (gbFile.exists()){
                Document gbDocument = CommonUtil.readGbFile(gbFile,document);
                MongoCollection<Document> gbCollection = carrierConfig.getMongodbCollection(carrierConfig.getGbfileCollection());
                gbCollection.findOneAndDelete(Filters.eq(GbField.gbId,fileId));
                gbCollection.insertOne(gbDocument);
            }else {
                retMap.put("flag","error");
                retMap.put("error" , "no such .gb file");
            }
        }
        retMap.put("flag","success");
        return retMap;
    }
}
