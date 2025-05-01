import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
constructor(public service: ApiService){
  this.getAllCategories()
}

public categories: any

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
}
