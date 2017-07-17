import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: 'contacto-form.component.html',
})
export class ContactoFormComponent implements OnInit {
  formularioContacto:FormGroup;
  uri:string;
  contacto:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private contactoService:ContactoService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idContacto"];
      if(this.uri !== "nuevo") {
        this.contactoService.getContacto(params["idContacto"])
        .subscribe(contacto => {
          this.contacto = contacto;
          this.formularioContacto = new FormGroup({
            'nombre': new FormControl(this.contacto.nombre, validaciones),
            'apellido': new FormControl(this.contacto.apellido, validaciones),
            'direccion': new FormControl(this.contacto.direccion, validaciones),
            'telefono': new FormControl(this.contacto.telefono, validaciones),
            'idCategoria': new FormControl(this.contacto.idCategoria,  Validators.required),
          });
        });
      } else {
        this.formularioContacto = new FormGroup({
          'nombre': new FormControl('', validaciones),
          'apellido': new FormControl('', validaciones),
          'direccion': new FormControl('', validaciones),
          'telefono': new FormControl('', validaciones),
          'idCategoria': new FormControl('', Validators.required)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nuevo Contacto");
      console.log(this.formularioContacto.value);
      this.contactoService.nuevoContacto(this.formularioContacto.value)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/contacto']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de contacto");
      this.contactoService.editarContacto(this.formularioContacto.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}
