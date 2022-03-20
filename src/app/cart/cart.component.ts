import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart:any = null;
  constructor(private cart_service: CartService) { 
    this.cart = this.cart_service.get_cart_or_return_null();
  }

  ngOnInit(): void {
  }

  clear_cart(){
    this.cart_service.clear_cart();
  }
}
