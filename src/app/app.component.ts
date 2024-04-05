import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  template: `<router-outlet></router-outlet><h1>{{ title }}</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent  {
 title='app work';
}
