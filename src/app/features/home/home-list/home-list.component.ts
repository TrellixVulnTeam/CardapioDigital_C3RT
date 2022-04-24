import { Component, OnInit } from '@angular/core';

import { Food } from '../../model/food.model';
import { FoodServiceService } from './../service/foodService.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {


  constructor(private foodservice:FoodServiceService) { }

  ngOnInit(): void {
  }
  foods:Array<Food> = this.foodservice.getAll();

}
