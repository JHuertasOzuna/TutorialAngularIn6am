import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { dashboard_routes } from './components/dashboard/dashboard.routes';

const APP_ROUTES:Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboard_routes,
    canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo:'login'}
]

export const app_routing = RouterModule.forRoot(APP_ROUTES);
