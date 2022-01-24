import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { LoginComponent } from './modules/login/login/login.component';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '', // khi '' sẽ redirect sang 'login'
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path : 'register',
   component : RegisterComponent
  },
  {
    path: 'inside/register', 
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'inside',
    component: DefaultLayoutComponent, // đi vào default layout, mà default-layout.html lại gọi <router-outlet></router-outlet>
    children: [
      {
        path: 'products',
        loadChildren: () => import('./modules/products/products.module').then( m => m.ProductsModule) // ProductModule được khai báo trong products.module
      },
      {
        path: 'categories', 
        loadChildren: () => import('./modules/categories/categories.module').then( m => m.CategoriesModule)
      },
      {
        path: 'home', 
        loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
      },
    ],
  }
  // {
  //   path: 'products/:id',
  //   component: ProductDetailComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
