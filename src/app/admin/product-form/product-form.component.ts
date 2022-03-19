import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductValidators } from 'src/app/common/validators/product.validators';
import { CategoryService } from 'src/app/service/category/category.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required, ProductValidators.price_outof_range]),
    category: new FormControl('',[Validators.required]),
    imageURL: new FormControl('',[Validators.required, ProductValidators.invalid_imageURL])
  })
  categories: string[]=[];
  product:any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private category_service: CategoryService,
    private product_service: ProductService) {
    let id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.product = this.product_service.get_product_from_id(Number(id));
      this.form.get('title')!.setValue(this.product.title);
      this.form.get('price')!.setValue(this.product.price);
      this.form.get('category')!.setValue(this.product.category);
      this.form.get('imageURL')!.setValue(this.product.imageURL);
    }
  }

      

  ngOnInit(): void {
    this.categories = this.category_service.get_all_categories();
    
  }

  save(product:any){
    if (this.product){
      this.product_service.update(product);
    } else{
      this.product_service.create(product);
    }
    this.router.navigate(['/admin/products'])
  }

  delete(product:any){
    console.log("Product Service deleting product", product)
  }

  get title(){
    return this.form.get('title')!;
  }

  get price(){
    return this.form.get('price')!;
  }

  get category(){
    return this.form.get('category')!;
  }

  get imageURL(){
    return this.form.get('imageURL')!;
  }

}
