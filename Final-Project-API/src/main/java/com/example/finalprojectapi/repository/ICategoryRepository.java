package com.example.finalprojectapi.repository;
import com.example.finalprojectapi.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ICategoryRepository extends JpaRepository<Category, Short> {
    public Category findById(short id);
    public Category findByCategoryName(String categoryName);
    public boolean existsByCategoryName(String categoryName);
}
