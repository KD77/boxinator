package com.example.boxinatorbackend.repository;

import com.example.boxinatorbackend.model.Box;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class JdbcBoxRepository implements BoxRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public int save(Box box) {
        return jdbcTemplate.update("INSERT INTO boxes (name,weight, color, country,price) VALUES(?,?,?,?,?)",
                new Object[] { box.getName(), box.getWeight(), box.getColor(),box.getCountry(),box.getPrice() });
    }

    @Override
    public List<Box> findAll() {
        return jdbcTemplate.query("SELECT * from boxes", BeanPropertyRowMapper.newInstance(Box.class));
    }

}
