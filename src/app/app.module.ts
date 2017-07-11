import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
