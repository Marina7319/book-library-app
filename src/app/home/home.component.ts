import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
