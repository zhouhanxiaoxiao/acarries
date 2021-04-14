package com.cibr.acarries.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.cibr.acarries.Util.CommonUtil;
import com.cibr.acarries.config.CarrierConfig;
import com.cibr.acarries.config.CarrierField;
import com.cibr.acarries.config.GbField;
import com.cibr.acarries.config.ReturnData;
import com.cibr.acarries.service.HomeService;
import com.cibr.acarries.service.UserSerivce;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;
import com.mongodb.client.result.DeleteResult;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HomeController {


    @Autowired
    private CarrierConfig carrierConfig;

    @Autowired
    private UserSerivce userSerivce;

    @Autowired
    private HomeService homeService;

    @RequestMapping(value = "/home/initPage", method = RequestMethod.POST)
    public String initHomePage(HttpServletRequest request,
                               HttpServletResponse response,
                               @RequestBody Map requestBody
    ){
        ReturnData ret = new ReturnData();
        try {
            Map<String, Object> retMap = new HashMap<>();
            Integer currentPage = (Integer) requestBody.get("currentPage");
            Integer size = (Integer) requestBody.get("pageSize");
            String searchVal = (String) requestBody.get("searchVal");
            Map<String, Object> map = homeService.queryCarriers(currentPage, size, searchVal);
            retMap.putAll(map);
            ret.setRetMap(retMap);
            ret.setCode("success");
        }catch (Exception e){
            ret.setCode("E500");
            ret.setErrMsg("系统异常！");
            e.printStackTrace();
        }
        return JSON.toJSONString(ret, SerializerFeature.DisableCircularReferenceDetect,SerializerFeature.WriteMapNullValue);
    }

    @RequestMapping(value = "/home/user", method = RequestMethod.GET)
    public String getUser(HttpServletRequest request,
                               HttpServletResponse response
    ){
        ReturnData ret = new ReturnData();
        try {
            Map<String, Object> retMap = new HashMap<>();
            String userId = (String) request.getAttribute("userId");
            ReturnData userInfo = userSerivce.getUserInfo(userId);
            ret=userInfo;
        }catch (Exception e){
            ret.setCode("E500");
            ret.setErrMsg("系统异常！");
            e.printStackTrace();
        }
        return JSON.toJSONString(ret, SerializerFeature.DisableCircularReferenceDetect,SerializerFeature.WriteMapNullValue);
    }

    @RequestMapping(value = "/home/search", method = RequestMethod.GET)
    public String search(HttpServletRequest request,
                          HttpServletResponse response,
                         @RequestBody Map requestBody
    ){
        ReturnData ret = new ReturnData();
        try {
            String searchVal = (String) requestBody.get("searchVal");
        }catch (Exception e){
            ret.setCode("E500");
            ret.setErrMsg("系统异常！");
            e.printStackTrace();
        }
        return JSON.toJSONString(ret, SerializerFeature.DisableCircularReferenceDetect,SerializerFeature.WriteMapNullValue);
    }


    @RequestMapping(value = "/home/deleteList", method = RequestMethod.POST)
    public String deleteList(HttpServletRequest request,
                         HttpServletResponse response,
                         @RequestBody Map requestBody
    ){
        ReturnData ret = new ReturnData();
        try {
            String idsStr = (String) requestBody.get("ids");
            List<String> ids = JSONObject.parseArray(idsStr,String.class);

            MongoCollection<Document> carrierTable = carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
            DeleteResult deleteResult = carrierTable.deleteMany(Filters.in(CarrierField.ID, ids));

            MongoCollection<Document> gbTable = carrierConfig.getMongodbCollection(carrierConfig.getGbfileCollection());
            gbTable.deleteMany(Filters.in(GbField.gbId, ids));
            Map<String ,Object> retMap = new HashMap<>();
            retMap.put("count", deleteResult.getDeletedCount());
            ret.setRetMap(retMap);
            ret.setCode("success");
        }catch (Exception e){
            ret.setCode("E500");
            ret.setErrMsg("系统异常！");
            e.printStackTrace();
        }
        return JSON.toJSONString(ret, SerializerFeature.DisableCircularReferenceDetect,SerializerFeature.WriteMapNullValue);
    }
}
