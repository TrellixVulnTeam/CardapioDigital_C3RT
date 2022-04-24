import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { Food } from '../../model/food.model';


@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService : CartServiceService) { }

  ListFinal:Array<Food> = this.cartService.getAll();

  ngOnInit(): void {

  }

}
