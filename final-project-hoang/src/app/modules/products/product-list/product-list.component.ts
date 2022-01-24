import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/model/categories-model';
import { CategoryService } from 'src/app/services/categories-service/category-service';
import { ProductService } from 'src/app/services/product-service/product-service';
import { Product } from '../../../model/product-model'
import * as productAction from '../state/product.actions'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

// Truyền dữ liệu vào cho product-list
export class ProductListComponent implements OnInit {
  // Để check xem show products , products/categoryName
  // nếu là products/categoryName thì hiện thị product của category đó thôi
  categories : Category [];
  products : Product[] = [];
  currentCategory : Category;
  currentCategoryId : number;
  subscriptionCategory : Subscription;
  subscriptionProduct : Subscription;
  
  constructor(private productService : ProductService,
              private categoryService : CategoryService,
              private activatedRoute : ActivatedRoute) { 
              }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe({
      next : (resp) => {
        console.log('next ở category');
        this.categories = resp.body;
      },
      error : (err) => {
        console.log('Lỗi Category rồi bạn ơi !');
      },
      complete : () => {
        console.log('Chuyện gì cũng đếnt tay tao Category ');
      }
    })
    ;
    let hoang = this.activatedRoute.snapshot.params['categoryId'];
    console.log('Current Category ID : ' + hoang);

    this.productService.getAllProduct().subscribe({
      next : (resp) => {
        console.log('next ở product');
         this.products = resp.body;
      },
      error : (err) => {
        console.log('Lỗi Product rồi bạn ơi !');
      },
      complete : () => {
        console.log('Chuyện gì cũng đếnt tay tao Product ');
      }
    });
    this.productService.getAllProduct().subscribe();
    this.categoryService.getAllCategory().subscribe();

  }

  product : Product = {
    productName : '',
    price: 0,
    image: '',
    categoryID : 0,
    createDate : new Date(),
    supplierID : 0
  }

  addToCart(product : Product) : void {
  }

  viewMore(product : Product) : void {
    this.product = product;
  }
  addNewProduct(){
  }
  

}
