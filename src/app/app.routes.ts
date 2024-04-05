import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,pathMatch: 'full'
    },
    {
        path: 'register',
        component: RegisterComponent,pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
];
