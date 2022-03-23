package com.example.boxinatorbackend;

import com.example.boxinatorbackend.controller.BoxController;
import com.example.boxinatorbackend.model.Box;
import com.example.boxinatorbackend.repository.BoxRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class BoxinatorBackendApplicationTests {
    @Autowired
    BoxRepository boxRepository;

    @Test
    public void testCreatBox(){
      Box box = new Box();
        box.setId(100);
        box.setName("chocolate");
        box.setWeight(7);
        box.setColor("dark");
        Assert.notNull(boxRepository.save(box));//created object to the database and must not be null
    }
    @Test
    public void testGetBox(){
        List<Box> box = boxRepository.findAll(); //list all the boxes from the database
        assertThat(box).size().isGreaterThan(0);// the list must be greater then 0
    }

}
