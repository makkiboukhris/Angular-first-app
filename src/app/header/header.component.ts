import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartLength: number=0;
  constructor(private cartService: CartService) {
    this.updateCount();
    document.addEventListener('cartUpdated', () => this.updateCount());
  }

  updateCount() {
    this.cartLength = this.cartService.getCartItems().length;
  }
}
