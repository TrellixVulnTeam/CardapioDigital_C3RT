import { Component, OnInit } from '@angular/core';

import { Food } from '../../model/food.model';
import { FoodServiceService } from './../service/foodService.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {


  foods:Array<Food> = [];

  constructor(
    private foodservice:FoodServiceService
    ) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(){
    this.foodservice.getAll().subscribe(data =>{
      this.foods = data;
    })
  }



}
