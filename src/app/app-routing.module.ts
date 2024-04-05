import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})export class AppRoutingModule {}