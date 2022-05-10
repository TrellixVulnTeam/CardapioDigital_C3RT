import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  constructor( private cartService :CartServiceService ) { }

  numberFood:number = this.cartService.getAll().length;

  ngOnInit(): void {


  }


}
