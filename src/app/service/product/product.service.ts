import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [{"id":1,"title": "Bread", "price":12, "imageURL": "https://upload.wikimedia.org/wikipedia/commons/3/33/Fresh_made_bread_05.jpg", "category":"Bread"}, {"id":2,"title":"Lemon", "price":2.5}]
  constructor() { }

  create(product:any){
    console.log("Product Service create product:", product);
  }

  update(product:any){
    console.log("Product Service update product:", product)
  }
  get_all_products(){
    return this.products
  }

  get_product_from_id(id:number){
    for (let i = 0 ; i < this.products.length; i++){
      if (this.products[i].id==id){
        return this.products[i];
      }
    }
    return null;
  }
}
