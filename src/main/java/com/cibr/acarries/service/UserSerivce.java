package com.cibr.acarries.service;

import com.alibaba.fastjson.JSONObject;
import com.cibr.acarries.Util.HttpRequestUtils;
import com.cibr.acarries.config.ReturnData;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserSerivce {

    @Value("${cibr.user.url}")
    private String urlPrefix;

    public ReturnData getUserInfo(String id){
        Map<String,String> params = new HashMap<>();
        params.put("userId", id);
        String s = HttpRequestUtils.doPost(urlPrefix + "/getUserInfo", params);
        ReturnData returnData = JSONObject.parseObject(s, ReturnData.class);
        return returnData;
    }
}
