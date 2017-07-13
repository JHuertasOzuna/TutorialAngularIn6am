import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  formularioSignUp:FormGroup;

  constructor() {  }

  ngOnInit() {
    this.formularioSignUp = new FormGroup({
      'nick': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required)
    });
  }

  public iniciarSesion() {
    console.log(this.formularioSignUp.value);
  }
}
