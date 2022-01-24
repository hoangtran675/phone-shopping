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
@Table(name = "product", catalog="angular")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column(name = "ProductID")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short id;

    @Column(name = "ProductName", length = 150, nullable = false, unique = true)
    private String productName;

    @Column(name = "Image", length = 300)
    private String image;

    @Column(name = "CategoryID")
    private int categoryID;

    @Column(name = "SupplierID")
    private int SupplierID;

    @Column(name = "Price")
    private int price;

    @Column(name = "CreateDate")
    private Date createDate;
}
