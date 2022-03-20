import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category/category.service';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any = []
  categories:any = []
  filtered_category:any = null;
  filtered_products:any=[]
  cart:any=null;
  constructor(private product_service: ProductService, private category_service: CategoryService, private route: ActivatedRoute) {
    console.log("Constructing Product Page")
    this.products = this.product_service.get_all_products();
    this.categories = this.category_service.get_all_categories();
    this.filtered_products = this.products;
    route.queryParamMap.subscribe(params=>{
      this.filtered_category = params.get('category');
      if (this.filtered_category==null){
        this.filtered_products = this.products;
      } else{
        this.filtered_products = this.products.filter((product:any)=>product.category==this.filtered_category);
      }
      
    })
  }

  ngOnInit(): void {
  }
}
