import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { it } from 'node:test';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:Product[]=[];

  private cartSubject=new BehaviorSubject<Product[]>([]);

  cart$=this.cartSubject.asObservable();


  constructor() { }

  addToCart(product:Product):void{
    this.cartItems.push(product);
    this.cartSubject.next([...this.cartItems]);
    console.log("product added successfully..")
  }
  removeFromCart( productId:number):void{
    this.cartItems=this.cartItems.filter(p=>p.id!==productId);
    this.cartSubject.next([...this.cartItems]);
    console.log("product removed");
  }
  getTotalPrice():number{
    return this.cartItems.reduce((totol,item)=>totol+item.price,0);

  } 

  getCartItems():Product[]{
    return this.cartItems;

  }
}
