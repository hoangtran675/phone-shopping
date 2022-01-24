import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListCategoryComponent } from './product-list-category/product-list-category.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer'


@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductListCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // StoreModule.forRoot({
    //   products : productReducer
    // })
  ]
})
export class ProductsModule { }
