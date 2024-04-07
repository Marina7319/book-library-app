import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AddBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
