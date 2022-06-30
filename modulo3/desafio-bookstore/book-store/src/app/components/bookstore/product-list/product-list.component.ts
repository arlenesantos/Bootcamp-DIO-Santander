import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: Book[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productListService.getAll().subscribe({
      next: response => this.books = response,
      error: error => console.log('Error', error),
    })

  }

}
