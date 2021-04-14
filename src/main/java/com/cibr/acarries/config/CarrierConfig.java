package com.cibr.acarries.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CarrierConfig {
    @Value("${carrier.mongodbURL}")
    private String mongodbURL;

    @Value("${carrier.mongodbName}")
    private String mongodbName;

    @Value("${carrier.gbfileCollection}")
    private String gbfileCollection;

    @Value("${carrier.carrierCollection}")
    private String carrierCollection;

    @Value("${carrier.searchCollection}")
    private String searchCollection;

    @Value("${carrier.pageShowCollection}")
    private String pageShowCollection;

    @Value("${carrier.enzymeCollection}")
    private String enzymeCollection;

    @Value("${carrier.filePath}")
    private String filePath;

    @Value("${carrier.fontSimsun}")
    private String fontSimsun;

    @Value("${carrier.carrier}")
    private String carrierFtl;


    public MongoCollection<Document> getMongodbCollection(String collectionName){
        MongoClient mongoClient = MongoClients.create(mongodbURL);
        MongoDatabase database = mongoClient.getDatabase(mongodbName);
        MongoCollection<Document> collection = database.getCollection(collectionName);
        return collection;
    }

    public String getMongodbURL() {
        return mongodbURL;
    }

    public void setMongodbURL(String mongodbURL) {
        this.mongodbURL = mongodbURL;
    }

    public String getMongodbName() {
        return mongodbName;
    }

    public void setMongodbName(String mongodbName) {
        this.mongodbName = mongodbName;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public String getFontSimsun() {
        return fontSimsun;
    }

    public void setFontSimsun(String fontSimsun) {
        this.fontSimsun = fontSimsun;
    }

    public String getCarrierFtl() {
        return carrierFtl;
    }

    public void setCarrierFtl(String carrierFtl) {
        this.carrierFtl = carrierFtl;
    }

    public String getGbfileCollection() {
        return gbfileCollection;
    }

    public void setGbfileCollection(String gbfileCollection) {
        this.gbfileCollection = gbfileCollection;
    }

    public String getCarrierCollection() {
        return carrierCollection;
    }

    public void setCarrierCollection(String carrierCollection) {
        this.carrierCollection = carrierCollection;
    }

    public String getSearchCollection() {
        return searchCollection;
    }

    public void setSearchCollection(String searchCollection) {
        this.searchCollection = searchCollection;
    }

    public String getPageShowCollection() {
        return pageShowCollection;
    }

    public void setPageShowCollection(String pageShowCollection) {
        this.pageShowCollection = pageShowCollection;
    }

    public String getEnzymeCollection() {
        return enzymeCollection;
    }

    public void setEnzymeCollection(String enzymeCollection) {
        this.enzymeCollection = enzymeCollection;
    }
}
