import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';
import { AuthGuardService } from './services/auth-guard.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { ContactoComponent } from './components/dashboard/contacto/contacto.component';
import { CategoriaComponent } from './components/dashboard/categoria/categoria.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    ContactoComponent,
    CategoriaComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [
    UsuarioService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
