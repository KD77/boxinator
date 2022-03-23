package com.example.boxinatorbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class BoxinatorBackendApplication {


    public static void main(String[] args) {
        SpringApplication.run(BoxinatorBackendApplication.class, args);
    }


}
