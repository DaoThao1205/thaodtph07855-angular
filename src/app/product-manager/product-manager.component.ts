import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];


  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    console.log('constructor')
   }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
   this.productService.getProducts().subscribe(data => {
     console.log(data);
     this.products = data;
    });
  }
  // updateProduct(){
  //       this.productService.updateProduct(this.product).subscribe(data => {
  //       this.router.navigateByUrl("/product")
  //     });
  // }
  // removeProduct(){
  //     this.productService.removeProduct(this.product).subscribe(data => {
  //       this.router.navigateByUrl("/product")
  //     });
  }
