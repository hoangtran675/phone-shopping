 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_SERVER = environment.apiUrl;
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient : HttpClient) { }

  getAllCategory() : Observable<HttpResponse<any>>{
    return this.httpClient.get<HttpResponse<any>>(`${API_SERVER}/categories`, {observe: 'response'});
  }

  getCategoryById(id : string) : Observable<HttpResponse<any>>{
    return this.httpClient.get<HttpResponse<any>>(`${API_SERVER}/categories/${id}`);
  }
}
