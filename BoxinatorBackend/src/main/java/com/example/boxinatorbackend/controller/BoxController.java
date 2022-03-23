package com.example.boxinatorbackend.controller;

import com.example.boxinatorbackend.model.Box;

import com.example.boxinatorbackend.repository.BoxRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoxController {
    @Autowired
    BoxRepository boxRepository;
    @GetMapping("/boxes")
    public ResponseEntity<List<Box>> getAllBoxes(@RequestParam(required = false) String name) {
        try {
            List<Box> box = new ArrayList<Box>();
            if (name == null)
                boxRepository.findAll().forEach(box::add);

            if (box.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(box, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/boxes")
    public ResponseEntity<String> createBox(@RequestBody Box box) {
        try {
          // double total = box.multiple(box.getCountry(), box.getWeight());
            boxRepository.save(new Box(box.getName(), box.getWeight(), box.getColor(), box.getCountry(), box.getPrice()));
            return new ResponseEntity<>("A "+ box.getName()+" that weighs"+" "+box.getWeight()+" "+"was succesfully created", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
