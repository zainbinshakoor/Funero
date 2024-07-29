import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent implements OnInit {
  categories = [
    { name: 'Dining', image: 'assets/dinnig.jpg' },
    { name: 'Living', image: 'assets/living.jpg' },
    { name: 'Bedroom', image: 'assets/dinnig.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
