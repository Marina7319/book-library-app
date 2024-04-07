import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AddBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
message!: "";

constructor(private http: HttpClient) {
  
}
ngOnInit(): void {
  this.http.get('http://localhost:8000/user', {withCredentials:true})
  .subscribe((res: any) => {
    this.message = `${}`
  }, (err) => { 
    this.message = err
  }
);
}
}
