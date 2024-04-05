import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
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

@NgModule({
imports: [CommonModule, RouterModule.forRoot(routes, {}), LoginComponent],
exports: [RouterModule],
})export class AppRoutingModule {}


// import { LoginComponent } from './login/login.component';
// import { RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';

// import { RegisterComponent } from './register/register.component';

// export const routing = RouterModule.forRoot([
//     { path: 'login', component: LoginComponent},
//     { path: 'register', component: RegisterComponent},
//     { path: '', component: HomeComponent},

// ]);
