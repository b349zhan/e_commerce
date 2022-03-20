import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    address1: new FormControl('',[Validators.required]),
    address2: new FormControl('',[]),
    city: new FormControl('',[Validators.required])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  get name(){
    return this.form.get('name')!;
  }

  get address1(){
    return this.form.get('address1')!;
  }
  
  get address2(){
    return this.form.get('address2')!;
  }

  get city(){
    return this.form.get('city')!;
  }

  checkout(data:any){
    console.log("Check out with", data);
    // Clear the shopping cart
    
  }
}
