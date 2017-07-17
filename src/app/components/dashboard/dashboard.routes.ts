import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoFormComponent } from './contacto/contacto-form.component';
import { CategoriaComponent } from './categoria/categoria.component';

export const dashboard_routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:idContacto', component: ContactoFormComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];
