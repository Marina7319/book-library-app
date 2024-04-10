import { BooksComponent } from './../books/books.component';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddBookComponent } from '../add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitter';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { map } from 'rxjs';

@Component({
  selector: 'header',
  standalone: true,
  imports: [BooksComponent, FormsModule, HomeComponent, RouterModule, CommonModule, AddBookComponent, AboutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  arr = []
 
  name = ''
  authenticated = false
  constructor(private http: HttpClient) { 
    this.getBook();
  }
  
  getBook() {
    return this.http.get("http://localhost:8000/book/list").pipe(
      map(res=> console.log(res)));
    }
    
    
    ngOnInit(): void { 
      Emitters.authEmitter.subscribe((auth:boolean) => {
        this.authenticated = auth
      })
      this.http.get("http://localhost:8000/book/list")
      .subscribe((res:any) => {
        this.arr = res
      }
    );
    }
    
    logout(): void { 
      this.http.post('http://localhost:8000/user/logout', {},{withCredentials:true})
      .subscribe(() => this.authenticated = false);
    }
    
  }
  