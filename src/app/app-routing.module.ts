import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/home/homepage/homepage.component';
import { CartPageComponent } from './features/cart/cart-page/cart-page.component';
import { ClientPageComponent } from './features/client/client-page/client-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomepageComponent},
  {path:'cart', component:CartPageComponent},
  {path:'clientform', component:ClientPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
