import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AddBookComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  authenticated = false
  constructor(private http: HttpClient) {}

  ngOnInit(): void { 
    Emitters.authEmitter.subscribe((auth:boolean) => {
      this.authenticated = auth
    })
  }

  logout(): void { 
    this.http.post('http://localhost:5000/api/logout', {},{withCredentials:true})
    .subscribe(() => this.authenticated = true);
  }

}
