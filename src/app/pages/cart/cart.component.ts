import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common';  // Import Angular's common module
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems : Product[]=[]// Get cart items from the service

  constructor(private cartService: CartService) {}

  // Remove item from the cart
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Update the cart view
  }

  // Get the total price
  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
