import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListCategoryComponent } from './product-list-category/product-list-category.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path : '',
    component : ProductListComponent
  },
   {
    path : 'add',
    component : ProductAddComponent
  },
  {
    path : 'detail/:id',
    component : ProductDetailComponent
  },
  {
    path : 'add/:id',
    component : ProductAddComponent
  },
  {
    path : ':categoryId',
    component : ProductListComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
