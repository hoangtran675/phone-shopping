package com.example.finalprojectapi.service;


import com.example.finalprojectapi.model.Category;
import com.example.finalprojectapi.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository repository;
    @Override
    public Category findById(short id) {
        return repository.findById(id);
    }

    @Override
    public Category findByCategoryName(String categoryName) {
        return repository.findByCategoryName(categoryName);
    }

    @Override
    public boolean existsByCategoryName(String categoryName) {
        return repository.existsByCategoryName(categoryName);
    }

    @Override
    public List<Category> findAll() {
        return repository.findAll();
    }

    @Override
    public void createCategory(Category category) {

    }

    @Override
    public void deleteCategory(short id) {

    }
}
