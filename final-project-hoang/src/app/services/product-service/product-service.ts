import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../model/product-model';


const API_SERVER = environment.apiUrl;
// 
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

// Đây là service của product chứa :
// - Chứa dữ liệu list produc
// - Chức các hàm hàm gọi, các hàm gọi này có thể chứa các api
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // HttpClient ngoài khai báo ở đây thì còn cần phải khai bảo module.ts,nơi mà component gốc thuộc về
  // HttpClientModule vào phần imports của module.ts
  // Và khi tạo ra các module thì cần khai báo về app.module trong phần import
  constructor(private httpClient : HttpClient) { 
    
  }

  getAllProduct() : Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(`${API_SERVER}/products`, {observe: 'response'} );
  }
  getAllProduct1()  {
    return this.httpClient.get(`${API_SERVER}/products`, {observe: 'response'} );
  }
  createProduct(product : Product){
    return this.httpClient.post(`${API_SERVER}/products/add`, product, {responseType: 'text'});
  }
  getAllProductById(productId : number) : Observable<HttpResponse<any>> {
    return this.httpClient.get<HttpResponse<any>>(`${API_SERVER}/products/${productId}`, {observe: 'response'} );
  }
  deleteProductById(productId : number) {
    return this.httpClient.delete(`${API_SERVER}/products/${productId}`, {responseType: 'text'} );
  }

}
