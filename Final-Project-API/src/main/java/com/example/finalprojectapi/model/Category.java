package com.example.finalprojectapi.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "categories", catalog="angular")
public class Category implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "CategoryID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short id;

    @Column(name = "CategoryName", length = 50, nullable = false, unique = true)
    private String categoryName;

    @Column(name = "Description", length = 150)
    private String description;

    @Column(name = "Image")
    private String image;

    @Column(name = "CreateDate")
    private Date createDate;

    @Column(name = "UpdateDate")
    private Date updateDate;



}
