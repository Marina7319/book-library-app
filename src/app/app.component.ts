
import { AddBookComponent } from './add-book/add-book.component';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule,AddBookComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 title='app work';
}
