import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api = 'https://5e7bf752a917d70016682c8c.mockapi.io/api/products';
  products = data;
  constructor(
    private http: HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
   getProduct(id): Observable<Product>{
     console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(product){
   
    return this.http.delete<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product){
    return this.http.post<Product>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products)
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}