import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../../shared/shared.module';
import { FoodServiceService } from './service/foodService.service';



@NgModule({
  declarations: [
    HomeComponent,
    HomeListComponent,
    HomepageComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomepageComponent,
  ],
  providers:[
    FoodServiceService,
  ]
})
export class HomeModule { }
