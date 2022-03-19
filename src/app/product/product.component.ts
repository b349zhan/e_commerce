import { Component, OnInit } from '@angular/core';
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
  constructor(private product_service: ProductService, private category_service: CategoryService) {
    this.products = this.product_service.get_all_products();
    this.categories = this.category_service.get_all_categories();
  }

  ngOnInit(): void {
  }

}
