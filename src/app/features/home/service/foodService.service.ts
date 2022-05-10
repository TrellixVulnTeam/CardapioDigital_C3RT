import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Food } from '../../model/food.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  food:Array<Food>= [ ]

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(){
    return this.httpClient.get<Array<Food>>(`${environment.baseUrlBackend}/snacks`, this.options);
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

