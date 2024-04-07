import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AddBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  messagge!: string

constructor(private http: HttpClient) {
  
}
ngOnInit(): void {
  this.http.get("http://localhost:8000/user/username", {withCredentials:true})
  .subscribe((res:any) => {
    this.messagge = `${res.firstname}`
    Emitters.authEmitter.emit(true);
  }, (err) => { 
    this.messagge = `error you are not logged in ${err}`
    Emitters.authEmitter.emit(false);
  }
);
}
}
