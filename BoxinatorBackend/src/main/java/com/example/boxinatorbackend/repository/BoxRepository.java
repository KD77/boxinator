package com.example.boxinatorbackend.repository;

import com.example.boxinatorbackend.model.Box;


import java.util.List;

public interface BoxRepository {
    int save(Box book);

    List<Box> findAll();

}
