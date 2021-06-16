import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL = 'http://warehouse-env.eba-fgud4p4s.eu-central-1.elasticbeanstalk.com/api';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.BASE_URL + '/products/');
  }
  addNewProduct(payload: ProductModel): Observable<ProductModel>{
    return this.http.post<ProductModel>(this.BASE_URL + '/add/' , payload);
  }

  getProductById(productId: ProductModel): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.BASE_URL + '/products/{id}');
  }

  modifyProduct(product: ProductModel): void {
  }
}
