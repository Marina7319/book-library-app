import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HomeComponent],
  template: `<router-outlet></router-outlet><app-register></app-register>`,
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
}
