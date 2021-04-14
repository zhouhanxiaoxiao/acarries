package com.cibr.acarries.Util;

import com.cibr.acarries.config.CarrierField;
import com.cibr.acarries.config.GbField;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import net.lingala.zip4j.ZipFile;
import net.lingala.zip4j.model.ExtraDataRecord;
import net.lingala.zip4j.model.FileHeader;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.bson.Document;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

public class CommonUtil {

    public static String UUID() {
        return UUID.randomUUID().toString().toLowerCase().replace("-", "");
    }

    public static Map<String, List<List<String>>> getAllWorkSheet(File file) {
        Map ret = new HashMap();
        Workbook workbook = null;
        try {
            if (file.getName().endsWith(".xls")) {
                workbook = new HSSFWorkbook(new FileInputStream(file));
            } else if (file.getName().endsWith(".xlsx")) {
                workbook = new XSSFWorkbook(new FileInputStream(file));
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        if (workbook == null) {
            return null;
        }
        int numOfSheet = workbook.getNumberOfSheets();
        int sheetIndex = 0;
        while (sheetIndex < numOfSheet) {
            Sheet sheet = workbook.getSheetAt(sheetIndex);
            if (sheet == null) {
                continue;
            }
            String sheetName = sheet.getSheetName();
            int lastRowNum = sheet.getLastRowNum();
            System.out.println("工作表【" + sheetName + "】共有多少行【" + lastRowNum + "】");
            if (lastRowNum == 0) {
                continue;
            }
            Row tmp = sheet.getRow(0);
            int cols = tmp.getPhysicalNumberOfCells();
            List<List<String>> retList = new ArrayList<List<String>>();
            for (int row = 0; row <= lastRowNum; row++) {
                Row r = sheet.getRow(row);
                if (r == null) {
                    continue;
                }
                List rowList = new ArrayList<String>();
                for (int col = 0; col < cols; col++) {
                    String cell = null;
                    try {
                        cell = r.getCell(col).getStringCellValue();
                    } catch (Exception e) {
                        if (HSSFDateUtil.isCellDateFormatted(r.getCell(col))){
                            cell = new SimpleDateFormat("yyyy-MM-dd").format(HSSFDateUtil.getJavaDate(r.getCell(col).getNumericCellValue()));
                        }else if (r.getCell(col) == null) {
                            cell = "";
                        } else {
                            cell = String.valueOf(r.getCell(col).getNumericCellValue());
                            BigDecimal tmpNum = new BigDecimal(cell);
                            tmpNum = tmpNum.setScale(6, BigDecimal.ROUND_HALF_DOWN);
                            cell = tmpNum.toString();
                        }
                    }
                    rowList.add(cell);
                }
                retList.add(rowList);
            }
            ret.put(sheetName, retList);
            sheetIndex++;
        }
        return ret;
    }

    /**
     * zip文件解压
     *
     * @param destPath 解压文件路径
     * @param zipFile  压缩文件
     */
    public static void unPackZip(File zipFile, String destPath) {
        try {
            ZipFile zip = new ZipFile(zipFile);
            zip.setCharset(Charset.forName("utf-8"));
            zip.getFileHeaders().forEach(v->{
                String extractedFile = getFileNameFromExtraData(v);
                try {
                    zip.extractFile(v, destPath ,extractedFile);
                } catch (Exception e) {
                    System.out.println("解压失败 ："+extractedFile);
                    e.printStackTrace();
                    return;
                }
                System.out.println("解压成功 ："+extractedFile);
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String getFileNameFromExtraData(FileHeader fileHeader) {
        if(fileHeader.getExtraDataRecords()!=null){
            for (ExtraDataRecord extraDataRecord : fileHeader.getExtraDataRecords()) {
                long identifier = extraDataRecord.getHeader();
                if (identifier == 0x7075) {
                    byte[] bytes = extraDataRecord.getData();
                    ByteBuffer buffer = ByteBuffer.wrap(bytes);
                    byte version = buffer.get();
                    assert (version == 1);
                    int crc32 = buffer.getInt();
                    System.out.println("使用：fileHeader.getExtraDataRecords() ");
                    return new String(bytes, 5, buffer.remaining(), StandardCharsets.UTF_8);
                }
            }
        }
        System.out.println("使用：fileHeader.getFileName()");
        return fileHeader.getFileName();
    }

    /**
     * 获取每一个质粒的基本信息
     *
     * @param key sheetName
     * @param row
     * @param titleList 标题列表
     * @return 根据不同的sheet返回不同的基本信息
     */
    public static Document handleSheet(String key, List<String> row, List<String> titleList) {
        int index = 0;
        Document document = new Document();
        document.append(CarrierField.ID, CommonUtil.UUID());
        document.append(CarrierField.TYPE, key);
        while (index < titleList.size()){
            if (index < row.size()){
                document.append(titleList.get(index).toUpperCase(),row.get(index));
            }else {
                document.append(titleList.get(index).toUpperCase(), "");
            }
            index ++;
        }
        return document;
    }

    /**
     * 获取每一个质粒的基本信息
     *
     * @param key sheetName
     * @param row
     * @return 根据不同的sheet返回不同的基本信息
     */
    public static Document handleSheet(String key, List<String> row) {
        int index = 0;
        Document document = new Document();
        document.append(CarrierField.ID, CommonUtil.UUID());
        document.append(CarrierField.TYPE, key);
        document.append(CarrierField.BOX, row.get(index++));
        document.append(CarrierField.POSITION, row.get(index++));
        document.append(CarrierField.CAT, row.get(index++));
        document.append(CarrierField.NAME, row.get(index++));
        document.append(CarrierField.BACKBONE, row.get(index++));
        document.append(CarrierField.PROMOTER, row.get(index++));
        document.append(CarrierField.EXPRESSION_CASSETTE, row.get(index++));
        document.append(CarrierField.PROK_RESIST, row.get(index++));
        document.append(CarrierField.EUK_RESIST, row.get(index++));
        if ("pB_pLenti & pRetro".equals(key)) {
            document.append(CarrierField.SELECTABLE_MARKERS, row.get(index++));
        }
        document.append(CarrierField.BACT_STRAIN, row.get(index++));
        document.append(CarrierField.BACT_CAT, row.get(index++));
        document.append(CarrierField.PRESERV_TIME, row.get(index++));
        document.append(CarrierField.WHERE_FROM, row.get(index++));
        document.append(CarrierField.ADDGENE, row.get(index++));
        document.append(CarrierField.MAP, row.get(index++));
        document.append(CarrierField.SEQUENCE, row.get(index++));
        document.append(CarrierField.CONC, row.get(index++));
        document.append(CarrierField.WHEN_MADE, row.get(index++));
        document.append(CarrierField.WHO_MADE, row.get(index++));
        document.append(CarrierField.A260_280__A260_230, row.get(index++));
        if ("pB_pLenti & pRetro".equals(key) || "pZ_pHelper".equals(key)) {
            document.append(CarrierField.OTHER_INFO, row.get(index++));
        }
        document.append(CarrierField.SHORT_DESCRIPTION, row.get(index++));
        return document;
    }

    /**
     * 保存所有筛选条件
     *
     * @param searchList 筛选条件list
     * @param document   当前文档
     * @param titleList 标题列表
     */
    public static void saveSearchItem(Map<String, Set<String>> searchList, Document document,List<String> titleList) {
        for (String title : titleList) {
            if ("id".equals(title.toLowerCase())){
                continue;
            }
            String s = (String) document.get(title);
            if (searchList.get(title) == null) {
                Set<String> set = new HashSet<>();
                set.add(CommonUtil.nullToStr(s));
                searchList.put(title, set);
            } else {
                Set<String> set = searchList.get(title);
                set.add(CommonUtil.nullToStr(s));
            }
        }
    }

    private static String nullToStr(String s) {
        if (s == null){
            return "";
        }
        return s.trim();
    }

    /**
     * 保存所有筛选条件
     *
     * @param searchList 筛选条件list
     * @param document   当前文档
     */
    public static void saveSearchItem(Map<String, Set<String>> searchList, Document document) {
        Set<String> titleList = document.keySet();

        Field[] fields = CarrierField.class.getDeclaredFields();
        for (Field field : fields) {
            String s = (String) document.get(field.getName());
            if (StringUtils.isEmpty(s)) {
                continue;
            }
            if (searchList.get(field.getName()) == null) {
                Set<String> set = new HashSet<>();
                set.add(s.trim());
                searchList.put(field.getName(), set);
            } else {
                Set<String> set = searchList.get(field.getName());
                set.add(s.trim());
            }
        }
    }

    /**
     * 解析质粒对应的.gb文件
     *
     * @param gbFile
     * @param gbDoc
     * @return
     * @throws IOException
     */
    public static Document readGbFile(File gbFile, Document gbDoc) throws IOException {
        BufferedReader br = null;
        Document document = new Document();
        document.append(GbField.name, (String) gbDoc.get(CarrierField.CAT) + (String) gbDoc.get(CarrierField.NAME));
        document.append(GbField.gbId, (String) gbDoc.get(CarrierField.ID));
        try {
            br = new BufferedReader(new InputStreamReader(new FileInputStream(gbFile)));
            String line = null;
            String flag = "init";
            String append = "";
            List<Document> features = new ArrayList<>();
            Document feature = null;
            while ((line = br.readLine()) != null) {
                line = line.trim();
                System.out.println(line);
                if (line.startsWith("FEATURES")) {
                    flag = "FEATURES";
                    document.append(GbField.title, append);
                    append = "";
                    continue;
                }
                if (line.startsWith("ORIGIN")) {
                    flag = "ORIGIN";
                    String[] attr = append.split("=");
                    feature.append(attr[0].substring(1), attr[1]);
                    append = "";
                    features.add(feature);
                    document.append(GbField.features, features);
                    continue;
                }
                if ("//".equals(line.trim())) {
                    document.append(GbField.seq, append);
                    flag = "end";
                    continue;
                }
                if ("init".equals(flag)) {
                    append += line + "\n";
                } else if ("FEATURES".equals(flag)) {
                    String[] split = line.trim().split("(\\s+)");
                    if (split.length == 2 && line.contains("..")) {
                        if (feature != null) {
                            String[] attr = append.split("=");
                            feature.append(attr[0].substring(1), attr[1]);
                            append = "";
                            features.add(feature);
                        }
                        feature = new Document();
                        feature.append("type", split[0].trim());
                        if (line.contains("complement")) {
                            String[] point = line.substring(line.indexOf("(") + 1, line.lastIndexOf(")")).split("\\..");
                            feature.append("stand", "-");
                            feature.append("start", point[0]);
                            feature.append("end", point[1]);
                        } else {
                            String[] point = split[1].split("\\..");
                            feature.append("start", point[0]);
                            feature.append("end", point[1]);
                            feature.append("stand", "+");
                        }
                    } else {
                        if (line.trim().startsWith("/")) {
                            if (!StringUtils.isEmpty(append)) {
                                String[] attr = append.trim().split("=");
                                String key = attr[0].trim().substring(1);
                                int index = 1;
                                while (feature.get(key) != null){
                                    key = key + index;
                                    index++;
                                }
                                feature.append(key, attr[1].trim().replace("\"",""));
                            }
                            append = line.trim();
                        } else {
                            append += line.trim();
                        }
                    }
                } else if ("ORIGIN".equals(flag)) {
                    String[] split = line.trim().split("\\s");
//                            for (String item : split){
//                                append += item;
//                            }
                    for (int i = 1; i < split.length; i++) {
                        append += split[i];
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            br.close();
        }
        return document;
    }

    public static List<Document> coventToList(FindIterable<Document> findIterable) {
        MongoCursor<Document> iterator = findIterable.iterator();
        List<Document> list = new ArrayList<>();
        while (iterator.hasNext()){
            list.add(iterator.next());
        }
        return list;
    }

    /**
     * 是否是Ajax异步请求
     */
    public static boolean isAjaxRequest(HttpServletRequest request)
    {

        String accept = request.getHeader("accept");
        if (accept != null && accept.indexOf("application/json") != -1)
        {
            return true;
        }

        String xRequestedWith = request.getHeader("X-Requested-With");
        if (xRequestedWith != null && xRequestedWith.indexOf("XMLHttpRequest") != -1)
        {
            return true;
        }

        return false;
    }
}
