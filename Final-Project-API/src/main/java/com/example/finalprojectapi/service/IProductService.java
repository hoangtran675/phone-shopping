package com.example.finalprojectapi.service;
import com.example.finalprojectapi.model.Product;

import java.util.List;

public interface IProductService {
    public Product findById(short id);
    public Product findByCategoryName(String categoryName);
    public boolean existsByCategoryName(String categoryName);
    public List<Product> findAll();
    public void createProduct(Product product);
    public void deleteProduct(short id);
}
