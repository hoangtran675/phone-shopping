package com.example.finalprojectapi.service;

import com.example.finalprojectapi.model.Product;
import com.example.finalprojectapi.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository repository;

    @Override
    public Product findById(short id) {
        return repository.findById(id);
    }

    @Override
    public Product findByCategoryName(String categoryName) {
        return repository.findByProductName(categoryName);
    }

    @Override
    public boolean existsByCategoryName(String categoryName) {
        return repository.existsByProductName(categoryName);
    }

    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public void createProduct(Product product) {
        repository.save(product);
    }

    @Override
    public void deleteProduct(short id) {
        repository.deleteById(id);
    }


}
