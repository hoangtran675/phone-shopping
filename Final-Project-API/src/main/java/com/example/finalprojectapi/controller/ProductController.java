package com.example.finalprojectapi.controller;

import com.example.finalprojectapi.model.Category;
import com.example.finalprojectapi.model.Product;
import com.example.finalprojectapi.service.ICategoryService;
import com.example.finalprojectapi.service.IProductService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log4j2
@RestController
@RequestMapping(value = "api/v1/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
    @Autowired
    private IProductService service;

    @GetMapping()
    public ResponseEntity<?> getAllProduct() {
        return new ResponseEntity<List<Product>>(service.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{productId}")
    public ResponseEntity<?> getProductById(@PathVariable(name = "productId") short id){
        return new ResponseEntity<Product>(service.findById(id), HttpStatus.OK);
    }

//    @GetMapping("/{productName}")
//    public ResponseEntity<?> getProductById(@PathVariable(name = "productName") String productName){
//        return new ResponseEntity<Product>(service.findByCategoryName(productName), HttpStatus.OK);
//    }
    @PostMapping("/add")
    public ResponseEntity<?> createProduct(@RequestBody Product product) {
        System.out.println("Create Product .............................................................................");
        service.createProduct(product);
        return new ResponseEntity<String>("Create successfully!", HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable(name = "id") short id) {
        service.deleteProduct(id);
        return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable(name = "id") short id, @RequestBody Product product) {
        product.setId(id);
        service.createProduct(product);
        return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
    }
}
