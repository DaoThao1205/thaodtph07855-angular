import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  showProductDetail: boolean= true;
  showBackToProductList: boolean= false;
  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
    this.products = this.productService.getProducts();
  }
  removeItem(id){
    // this.productService.removeProduct(id);
    this.products = this.products.filter(product => product.id != id);
  }



  // changeStatus(){
  //   // this.product.status = !this.product.status;
  // }
  // changeName(e){
  //   // this.product.name = e.target.value;
  // }
  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id);
  // }
  backToProductList(){
    this.showBackToProductList=false;
    this.showProductDetail=true;
    this.selected=new Product();
  }
  showDetail(product){
    console.log(product);
    this.showBackToProductList=true;
    this.showProductDetail=false;
    this.selected = product;
  }
  Edit(product){
    
  }
}
