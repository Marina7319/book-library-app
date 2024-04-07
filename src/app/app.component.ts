import { AddBookComponent } from './add-book/add-book.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule,AddBookComponent, HeaderComponent, HomeComponent, FormsModule, ReactiveFormsModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 searchControl = new FormControl();

 constructor(private http:HttpClient) { 
  
 }
}


