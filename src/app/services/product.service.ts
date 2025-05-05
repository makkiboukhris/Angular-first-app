// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Earbuds",
      "description": "High-quality wireless earbuds with noise cancellation and 20-hour battery life.",
      "price": 79.99,
      "category": "Electronics",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 2,
      "name": "Smartphone Stand",
      "description": "Adjustable smartphone stand for comfortable viewing at any angle.",
      "price": 12.99,
      "category": "Accessories",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 3,
      "name": "Stainless Steel Water Bottle",
      "description": "Insulated 1L water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      "price": 24.95,
      "category": "Home & Kitchen",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 4,
      "name": "Wireless Charging Pad",
      "description": "Fast-charging Qi-compatible wireless charging pad for smartphones.",
      "price": 29.99,
      "category": "Electronics",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 5,
      "name": "Organic Cotton T-Shirt",
      "description": "Soft, breathable 100% organic cotton t-shirt available in multiple colors.",
      "price": 19.99,
      "category": "Clothing",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 6,
      "name": "Portable Power Bank",
      "description": "10000mAh power bank with dual USB ports for charging on the go.",
      "price": 34.50,
      "category": "Electronics",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 7,
      "name": "Yoga Mat",
      "description": "Non-slip, eco-friendly yoga mat with carrying strap.",
      "price": 27.99,
      "category": "Fitness",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    },
    {
      "id": 8,
      "name": "Coffee Maker",
      "description": "Programmable 12-cup coffee maker with built-in grinder.",
      "price": 89.99,
      "category": "Home & Kitchen",
      "imagePath": "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}