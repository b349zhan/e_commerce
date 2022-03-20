import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input("categories") categories:any = [];
  @Input("filtered_category") filtered_category:any=null;
  constructor() { }

  ngOnInit(): void {
  }

}
