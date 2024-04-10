import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, FormsModule, HomeComponent, RouterModule, CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
