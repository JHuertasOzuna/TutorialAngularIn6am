import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  uriUsuario = "http://localhost:3000/api/v1/usuario/";

  constructor(private _http:Http) {}

  getUsuarios() {
    return this._http.get(this.uriUsuario)
    .map(res => {
      console.log(res.json());
    });
  }
}
