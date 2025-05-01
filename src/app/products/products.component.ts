import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(public service: ApiService){
  this.getAllProducts()
}


public products: any

getAllProducts() {
  this.service.getProducts().subscribe({
    next: (data: any) => {
      console.log(data);
      this.products = data
    },
    error: (error: any) => {
      console.log(error);
    }
  })
}
}
