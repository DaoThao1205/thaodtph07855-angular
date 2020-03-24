import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
  api = 'https://5c999ea71a4c360014a0ff5b.mockapi.io/products';
  products = data;
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeProduct(id){
    return this.products.filter(product => product.id !== id);
  }
  addProduct(product){
    const newProduct = { id: 5, ...product};
    this.products.push(newProduct);
    console.log(this.products)
  }
  updateProduct(product){
     return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}