import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component'; // Import the ProductComponent
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent], // Add ProductComponent to imports
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  // Sample product data
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Phone', price: 700, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Smart Watch', price: 200, image: 'https://via.placeholder.com/150' },
  ];
}
