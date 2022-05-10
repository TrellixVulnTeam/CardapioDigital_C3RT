import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CartServiceService } from '../../cart/service/cart-service.service';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  user:User = {
    name:" ",
    phone:" ",
    address:" ",
    payment:" "
  }


  constructor(
    private router: Router,
    private cartSerice : CartServiceService
    ) { }

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    payment: new FormControl('',[Validators.required])

  });

  onSubmit() {
    const formValue = this.userForm.value;
    this.user.name = formValue.name;
    this.user.phone = formValue.phone;
    this.user.address = formValue.address;
    this.user.payment = formValue.payment;
    this.cartSerice.createRequestFood(this.user);
    sessionStorage.setItem("user",`${this.user}`);
    this.router.navigateByUrl('/cart');
  }
}
