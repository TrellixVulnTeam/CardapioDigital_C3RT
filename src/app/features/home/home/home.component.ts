import { Component, OnInit, Input } from '@angular/core';

import { Food } from '../../model/food.model';;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input()
  food?:Food

  constructor( ) { }

  ngOnInit(): void {
  }


}
