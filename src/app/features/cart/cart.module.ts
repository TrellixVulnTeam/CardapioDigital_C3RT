import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './cart/cart.component';


import { HomeModule } from '../home/home.module';
import { CartServiceService } from './service/cart-service.service';

@NgModule({
  declarations: [
    CartPageComponent,
    CartComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    CartPageComponent,
    CartComponent,

  ],
  providers: [
    CartServiceService

  ]

})
export class CartModule { }
