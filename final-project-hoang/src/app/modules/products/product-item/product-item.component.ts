import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product-service';
import { Product } from 'src/app/model/product-model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() item : Product; // nhận dữ liệu từ component cha truyền xuống, gán vào biến tên item
  @Output() addToCartChild : EventEmitter<any> = new EventEmitter<any>(); // truyền hàm lên trên thông qua emitter
  @Output() viewMoreChild : EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService : ProductService) { }
  products : Product[] = [];
  ngOnInit(): void {
    // this.products = this.productService.products;
  }

  addToCart(product : Product) : void {
    this.addToCartChild.emit(product);
  }

  viewMore(product : Product) : void {
    this.viewMoreChild.emit(product);
  }

}
