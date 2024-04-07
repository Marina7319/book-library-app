import { AddBookComponent } from './add-book/add-book.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule,AddBookComponent, HeaderComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 title='app work';
}
