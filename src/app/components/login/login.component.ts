import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  formularioLogin:FormGroup;

  constructor(private usuarioService:UsuarioService) {  }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      'nick': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required)
    });
  }

  public iniciarSesion() {
    console.log(this.formularioLogin.value);
    this.usuarioService.autenticar(this.formularioLogin.value);
  }
}
