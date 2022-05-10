import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { Food } from '../../model/food.model';


@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService : CartServiceService) { }

  listFinal:Array<Food> = this.cartService.getAll();
  usertest:boolean = false;


  ngOnInit(): void {
    let test = sessionStorage.getItem("user") ;
     if (test) {
       this.usertest = true;
      }

  }
  finalRequest(){
    this.cartService.createRequestFoodfinal();
  }

}
