import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input("product")product:any=null;
  @Input("want_button")want_button:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
