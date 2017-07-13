import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  usuarios:any[];
  constructor(
    private http:Http,
    private router:Router
  ) {}

  public autenticar(usuario:any) {
    let uriUsuario:string = "http://localhost:3000/auth/";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsIm5pY2siOiJASkh1ZXJ0YXMiLCJjb250cmFzZW5hIjoiMTIzNCIsImlhdCI6MTQ5OTk2NzgwMCwiZXhwIjoxNDk5OTcxNDAwfQ.r_8l_8Is_oxopIQWamCLGm5iJL2UfXcOaimRkYO9bWM');

    let options = new RequestOptions({headers : headers});
    let data = JSON.stringify(usuario);

    this.http.post(uriUsuario, data, options)
    .subscribe(res => {
      console.log(res.json());
      let token = res.json().token;
      if(token) {
        console.log("Si existe el token");
        localStorage.setItem('token', token);
        //localStorage.setItem('idUsuario', res.json().USUARIO.idUsuario);
        this.router.navigate(['/dashboard/usuario']);
      } else {
        console.log("No existen token");
        return false;
      }
    }, error => {
      console.log(error.text());
    })

  }

  public verificarUsuario():boolean {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  /*public getUsuarios() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsIm5pY2siOiJASkh1ZXJ0YXMiLCJjb250cmFzZW5hIjoiMTIzNCIsImlhdCI6MTQ5OTk2MjkzNCwiZXhwIjoxNDk5OTY2NTM0fQ.V8elxq5UReuFkFRoA-AQJK-tEpOnqmpi7AREglHRsjI');
    let options = new RequestOptions({headers: headers});

    return this.http.get(this.uriUsuario,)
    .map(res => {
      this.usuarios = res.json();
      console.log(this.usuarios);
    });
  }*/
}
