import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { CategoriesItemComponent } from './categories-item/categories-item.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
  {
    path : '',
    component : CategoriesListComponent
  },
  {
    path : ':id',
    component : CategoriesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
