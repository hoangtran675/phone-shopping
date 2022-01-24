package com.example.finalprojectapi.controller;

import com.example.finalprojectapi.model.Category;
import com.example.finalprojectapi.service.ICategoryService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "api/v1/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
    @Autowired
    private ICategoryService service;

    @GetMapping()
    public ResponseEntity<?> getAllCategory() {
        log.info("go to get all category");
        return new ResponseEntity<List<Category>>(service.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{categoryId}")
    public ResponseEntity<?> getCategoryById(@PathVariable(name = "categoryId") short id) {
        return new ResponseEntity<Category>(service.findById(id), HttpStatus.OK);
    }
    @GetMapping("/categoryName/{categoryName}")
    public ResponseEntity<?> getCategoryByCategoryName(@PathVariable(name = "categoryName") String categoryName) {
        return new ResponseEntity<Category>(service.findByCategoryName(categoryName), HttpStatus.OK);
    }

}
