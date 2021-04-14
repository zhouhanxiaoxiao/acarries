package com.cibr.acarries.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

@Configuration
@MapperScan(basePackages = "com.cibr.logincenter.dao.user", sqlSessionFactoryRef = "UserSqlSessionFactory")
public class UserDataSourceConfig {

    @Bean(name = "UserDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.user")
    public DataSource getUserDataSource(){
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "UserSqlSessionFactory")
    public SqlSessionFactory userSqlSessionFactory(@Qualifier("UserDataSource") DataSource datasource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(datasource);
        bean.setMapperLocations(
                new PathMatchingResourcePatternResolver().getResources("classpath*:generator/user/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "UserSqlSessionTemplate")
    public SqlSessionTemplate userSqlSessionTemplate(@Qualifier("UserSqlSessionFactory") SqlSessionFactory sessionfactory){
        return new SqlSessionTemplate(sessionfactory);
    }
}
