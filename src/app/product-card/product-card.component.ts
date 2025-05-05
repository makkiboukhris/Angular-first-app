import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: Product= {
    id: 0,
    name: "null",
    description: "null",
    price: 0,
    category: "null",
    imagePath: "null",
  };
  qtty: number = 0;
  constructor(private cartService: CartService) {}
  addToCart() {
    if(this.qtty>0){
      this.cartService.addToCart(this.product.id,this.qtty);
      this.qtty=0;
    }
  }
  decreaseQuantity(){
    if( this.qtty > 0 ) this.qtty--;
  }
  increaseQuantity(){
    this.qtty++;
  }
}
