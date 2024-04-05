// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// const routes: Routes = [
//     {
//         path: '',
//         component: LoginComponent
//     },
//     {
//         path: 'home',
//         component: HomeComponent
//     },
//     {
//         path: 'register',
//         component: RegisterComponent
//     }

// ];

// @NgModule({
// imports: [RouterModule.forRoot(routes)],
// exports: [RouterModule],
// })export class AppRoutingModule {}


import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';

export const routing = RouterModule.forRoot([
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '', component: HomeComponent},

]);
