import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel>{
    return this.http.get<ProductModel>('http://localhost:8080/api/products/');
  }

  addNewProduct(payload: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>('http://localhost:8080/api/add/' , payload);
  }

  getProductById(productId: ProductModel): Observable<ProductModel> {
    return this.http.get<ProductModel>('http://localhost:8080/api/products/{id}');

  }
}
