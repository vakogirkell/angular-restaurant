import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(public service: ApiService){
  this.getAllCategories()
  this.getAllProducts()
}

public categories: any
public foodList:any

  getAllCategories() {
    this.service.getCategories().subscribe({
      next: (data: any) => {
        console.log(data);
        this.categories = data
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
  changeCategory(id:number) {
    this.service.filterByCategory(id).subscribe((data : any) =>{
      this.foodList = data.products
    })
  }


getAllProducts() {
  this.service.getProducts().subscribe({
    next: (data: any) => {
      console.log(data);
      this.foodList = data
    },
    error: (error: any) => {
      console.log(error);
    }
  })
}
}
