import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  contactos:any[] = [];

  constructor(
    private contactoService:ContactoService
  ) { }

  public inicializar() {
    this.contactoService.getContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  ngOnInit() {
    this.inicializar();
  }

  borrarContacto(idContacto:any) {
    this.contactoService.eliminarContacto(idContacto)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}
