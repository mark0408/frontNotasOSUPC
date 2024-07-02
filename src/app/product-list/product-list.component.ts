import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products : Product[]

  constructor(private productService: ProductService){}; //Inyectando el servicio

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("Reload Data!!!")
    this.productService.getProductList().subscribe(products => this.products = products);
  }

}
