import { Component, OnInit, Input } from '@angular/core';

import { Food } from '../../model/food.model';;
import { CartServiceService } from '../../cart/service/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  food?:Food

  constructor( private cartService : CartServiceService) { }

  ngOnInit(): void {
  }

  ADDCart(){
    if (this.food) {
      this.cartService.addFood(this.food);
    };
  }

}
