import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() book!: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
