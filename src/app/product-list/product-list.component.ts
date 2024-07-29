import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 0,
      name: 'Syltherine',
      price: 'Rp 2.500.000',
      image: 'assets/living.jpg',
    },
    {
      id: 1,
      name: 'Leviosa',
      price: 'Rp 7.000.000',
      image: 'assets/dinnig.jpg',
    },
    {
      id: 2,
      name: 'Lolito',
      price: 'Rp 14.000.000',
      image: 'assets/living.jpg',
    },
    {
      id: 3,
      name: 'Respira',
      price: 'Rp 500.000',
      image: 'assets/dinnig.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  isHovered: boolean = false;
  productId: number = 0;

  onMouseEnter(id: number) {
    this.isHovered = true;
    this.productId = id;
  }

  onMouseLeave() {
    this.isHovered = false;
    this.productId = 0;
  }
}
