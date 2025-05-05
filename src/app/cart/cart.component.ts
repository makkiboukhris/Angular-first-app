import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

type Cart={
  productId: number,
  qtty: number
}
type CartItem={
  id: number;
  name: string;
  price: number;
  qtty: number;
} ;

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Cart[] = [];
  items: CartItem[] = [];
  constructor(private cartService: CartService, private productService: ProductService) {
    this.getCartItems();
    document.addEventListener('cartUpdated', () => this.getCartItems());
  };
  getCartItems() {
    const cartItems: Cart[] = this.cartService.getCartItems();
    const productList = this.productService.getProducts();
    this.items=[];
    cartItems.forEach(cartItem => {
      const product = productList.find(p => p.id === cartItem.productId);
      if (product) {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          qtty: cartItem.qtty
        });
      }
    });
  }
}

