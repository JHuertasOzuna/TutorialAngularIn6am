import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactoService {
  constructor(
    private http:Http
  ) {  }

  public getContactos() {
    let uri = "http://localhost:3000/api/v1/contacto/";
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => res.json());
  }

  public getContacto(idContacto:number) {
    let uri = "http://localhost:3000/api/v1/contacto/" + idContacto;
    let headers = new Headers({
      'Authorization': localStorage.getItem('token')
    });

    let options = new RequestOptions({ headers: headers});
    return this.http.get(uri, options)
    .map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  public nuevoContacto(contacto:any) {
    let uri = "http://localhost:3000/api/v1/contacto/";
    let data = JSON.stringify(contacto);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.post(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public editarContacto(contacto:any, idContacto:any) {
    let uri = "http://localhost:3000/api/v1/contacto/" + idContacto;
    let data = JSON.stringify(contacto);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });

    return this.http.put(uri, data, { headers })
    .map(res => {
      return res.json();
    });
  }

  public eliminarContacto(idContacto:any) {
    let uri = "http://localhost:3000/api/v1/contacto/" + idContacto;
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    let options = new RequestOptions({headers: headers});
    return this.http.delete(uri, options)
    .map(res => {
      return res.json();
    });
  }
}
