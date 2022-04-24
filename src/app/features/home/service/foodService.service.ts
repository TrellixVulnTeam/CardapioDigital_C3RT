import { Injectable } from '@angular/core';
import { Food } from '../../model/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  food:Array<Food>= [
    { id:1,
      name:"hamburgue",
      description:"pão,ovo,carne.",
      price:15.00,
      number:1
    },
    { id:2,
      name:"hamburgue",
      description:"pão,ovo,carne.",
      price:15.00,
      number:2
    },
    { id:2,
      name:"hamburgue",
      description:"pão,ovo,carne.",
      price:15.00,
      number:3
    },
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
  return this.food;
}
createStudent(food:Food){

}
getDefaultUser(){
  return {
    name: 'nome',
    describe: 'email',
    price:0,
    number:0
    }
}


}
