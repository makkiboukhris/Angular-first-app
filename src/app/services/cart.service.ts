import { Injectable } from '@angular/core';
type Cart={
  productId: number,
  qtty: number
}
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartItems: Cart[] = [];

  addToCart(productId: number, qtty: number) {
    const existingItem = this.cartItems.find(item => item.productId === productId);
    if(existingItem){
      existingItem.qtty += qtty;
    }else {
      this.cartItems.push({productId,qtty});
    }
    this.emitCartChanged();
  }

  getCartItems() {
    return [...this.cartItems]; 
  }

  private emitCartChanged() {
    document.dispatchEvent(new CustomEvent('cartUpdated', {
      detail: this.cartItems
    }));
  }

  constructor() { }
}
