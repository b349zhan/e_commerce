import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  add_product_to_cart(product:any){
    // To be completed
    console.log("Cart Service add product",product);
    let cart = this.get_or_create_cart();
  }

  get_or_create_cart(){
    // To be completed
    let cart_id = localStorage.getItem('cart_id');
    if (cart_id){
      // Should read the cart from the database
      return Number(cart_id);
    } else{
      // Should create a new cart from the database and return a string
      let cart_id = 1;
      localStorage.setItem('cart_id', cart_id.toString());
      return cart_id;
    }
  }

  get_cart_from_id(cart_id:number){
    // To be completed
    let cart = 1;
    return cart
  }

  get_cart_or_return_null(){
    let cart_id = localStorage.getItem('cart_id');
    let cart = null;
    // Get the cart object from database
    if (cart_id){
      cart = this.get_cart_from_id(Number(cart_id));
      return cart;
    }
    return cart;
  }

  clear_cart(){
    console.log("Clearing Shopping Cart");
    let cart_id = this.get_cart_or_return_null();
  }
}
