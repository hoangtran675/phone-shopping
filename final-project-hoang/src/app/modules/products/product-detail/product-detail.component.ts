import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product-service';
import { Product } from '../../../model/product-model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
// Hiển thị dữ liệu khi mà nhấn vào ViewMore của product
export class ProductDetailComponent implements OnInit {
  product : Product = {
    id : 0,
    productName : '',
    price: 0,
    image: '',
    categoryID : 0,
    createDate : new Date(),
    supplierID : 0
  };
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductService, private route : Router) {
    
   }

  ngOnInit(): void {
    // sau khi nhấn product thì url sẽ chuyển sang dạng products/id
    // để lấy id từ url thì sử dụng thư viện ActivateRoute
    // có hai cách lấy
    // const id = this.router.snapshot.paramMap.get("id");
    // console.log(id);
    
    // lấy id, từ it filter ra product và gán vào cho this.product
    // this.router.params.subscribe(res => {
    //   this.product = this.productService.products.filter( (item) => {
    //     return item.id = res.id;
    //   })[0]
    // });
    const itemId = this.activatedRoute.snapshot.params['id'];
    this.productService.getAllProductById(itemId).subscribe({
      next : (resp) => {
        this.product = resp.body;
      }
    });
   
  }

  deleteProduct(product : Product){
    let confirmDelete = confirm('Are you sure to delete this product ?');
    if(confirmDelete == true ){
      this.productService.deleteProductById(product.id!).subscribe({
        next : (resp) => {
          this.route.navigateByUrl('/inside/products');
        }
      });
    }
  }
  updateProduct(product : Product){
    this.route.navigateByUrl(`/inside/products/add/${product.id}`);
  }

}
