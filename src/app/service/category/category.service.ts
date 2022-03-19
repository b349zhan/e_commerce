import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  get_all_categories(){
    return ["Bread", "Dairy", "Fruits", "Seasonings", "Vegetables"];
  }

  add_categories(category:any){
    console.log("Adding Category");
  }

  delete_category(category:any){
    console.log("Delete Category");
  }
}
