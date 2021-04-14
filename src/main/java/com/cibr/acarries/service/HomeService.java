package com.cibr.acarries.service;

import com.cibr.acarries.Util.CommonUtil;
import com.cibr.acarries.config.CarrierConfig;
import com.cibr.acarries.config.CarrierField;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;
import org.apache.bcel.generic.IF_ACMPEQ;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class HomeService {

    @Autowired
    private CarrierConfig carrierConfig;

    public Map<String,Object> queryCarriers(Integer currentPage, Integer size, String searchVal) {
        Map<String,Object> ret = new HashMap<>();
        MongoCollection<Document> mongodbCollection =
                carrierConfig.getMongodbCollection(carrierConfig.getCarrierCollection());
        ret.put("total",mongodbCollection.countDocuments());

        MongoCollection<Document> searchCollection = carrierConfig.getMongodbCollection(carrierConfig.getSearchCollection());
        FindIterable<Document> searchDocs = searchCollection.find();
        List<Document> searchList = CommonUtil.coventToList(searchDocs);
        ret.put("searchList", searchList);

        if (StringUtils.isEmpty(searchVal)){
            FindIterable<Document> carrierList = mongodbCollection.find().sort(Sorts.ascending(CarrierField.NAME))
                    .limit(size).skip(currentPage * size);
            List<Document> carriers = CommonUtil.coventToList(carrierList);
            ret.put("carriers",carriers);
        }else {
            ArrayList<Bson> list = new ArrayList<>();
            String[] searchVals = searchVal.split("\\s");
            List<Pattern> patterns = new ArrayList<>();
            for (String item : searchVals){
                if (StringUtils.isEmpty(item)){
                    continue;
                }
                Pattern pattern = Pattern.compile("^.*" + item.trim() +".*$", Pattern.CASE_INSENSITIVE);
                patterns.add(pattern);
            }
            for (Pattern pattern : patterns){
                for (Document search : searchList){
                    list.add(Filters.regex(search.getString("field"),pattern));
                }
            }
            Bson or = Filters.or(list);
            FindIterable<Document> carrierList = mongodbCollection.find(or).sort(Sorts.ascending(CarrierField.NAME))
                    .limit(size).skip(currentPage * size);
            List<Document> carriers = CommonUtil.coventToList(carrierList);
            ret.put("carriers",carriers);
        }

        return  ret;
    }
}
