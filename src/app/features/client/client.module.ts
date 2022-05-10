import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientFormComponent,
    ClientPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],exports:[
    ClientPageComponent,
  ]
})
export class ClientModule { }
