import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("product")product:any=null;
  @Input("want_button")want_button:boolean=false;
  @Input("cart") cart:any = null;
  constructor(private cart_service: CartService) { }

  ngOnInit(): void {
  }

  add_product_to_cart(){
    this.cart_service.add_product_to_cart(this.product);
  }

}
