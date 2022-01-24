package com.example.finalprojectapi.service;


import com.example.finalprojectapi.model.Category;

import java.util.List;

public interface ICategoryService {
    public Category findById(short id);
    public Category findByCategoryName(String categoryName);
    public boolean existsByCategoryName(String categoryName);
    public List<Category> findAll();
    public void createCategory(Category category);
    public void deleteCategory(short id);
}
