import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent implements OnInit{

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe();
  }

  mostrar:boolean = false;

  frase:any = {
    mensaje: "Un gran poder requiere una gran responsabilidad",
    autor: "Ben Parker"
  }
  personajes:string[] = ["Spidy", "Venom", "Dr. Octopus", "Duende Verde"];

}
