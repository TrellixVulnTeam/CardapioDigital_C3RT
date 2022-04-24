import { Injectable } from '@angular/core';
import { Food } from '../../model/food.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  foods:Array<Food> = [
     { id:4,
    name:"hamburgue",
    description:"pão,ovo,carne.",
    price:15.00,
    number:4
  },
  { id:5,
    name:"hamburgue",
    description:"pão,ovo,carne.",
    price:15.00,
    number:5
  }
]

  constructor() { }

  getAll(){
    return this.foods;
  };

  addFood(food:Food){
      this.foods.push(food);
      console.log(this.foods.length)
      console.log("CHEGOU O LANCHE "+JSON.stringify(food));
  }

  numberFood(){
    sessionStorage.setItem("pedidos",this.foods.length.toString())
    return ;
  }
}
