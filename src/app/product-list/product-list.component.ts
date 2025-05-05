import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,NgFor ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
