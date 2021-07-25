import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor() {}

  list: number[] = [];

  ngOnInit(): void {}

  // renderCartList(list: number[]) {
  //   this.list = list;
  // }
}
