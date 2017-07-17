import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {

  }

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

}
