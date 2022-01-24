package com.example.finalprojectapi.repository;


import com.example.finalprojectapi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.PathVariable;

public interface IProductRepository extends JpaRepository<Product, Short> {
    public Product findById(short id);
    public Product findByProductName(String categoryName);
    public boolean existsByProductName(String categoryName);


}
