import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products:any=[];
  filtered_products:any = [];
  constructor(private product_service: ProductService) { }

  ngOnInit(): void {
    this.products = this.product_service.get_all_products();
    this.filtered_products = this.products;
  }

  filter(query:string){
    if (query){
      this.filtered_products = this.filtered_products.filter((product:any)=> product.title.toLowerCase().includes(query.toLowerCase()));
    }else{
      this.filtered_products = this.products;
    }
  }
}
