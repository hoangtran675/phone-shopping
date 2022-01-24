import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesItemComponent } from './categories-item/categories-item.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
// import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesItemComponent
    // CategoriesDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule
  ]
})
export class CategoriesModule { }
