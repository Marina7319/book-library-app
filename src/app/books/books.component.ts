import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'books',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  search = new FormControl();
  arr = []
  array = []
  word = ''
  constructor( private http: HttpClient)  
  {   
  this.getBook();
  }

ngOnInit():void {
  if(this.array.length === 0) {
    this.http.get("http://localhost:8000/book/list")
      .subscribe((res:any) => {
      this.array = res
      }
    );
  }
     
  this.search.valueChanges.pipe(filter(text => text.length >= 3))
  .pipe(debounceTime(400)).pipe(distinctUntilChanged()).subscribe(value => 
  {
    this.http.get("http://localhost:8000/book/list")
    .subscribe((res:any) => {
      this.arr = res
      if(value !== this.word) {
        this.array = []
      }
      this.arr.forEach(element => {
        if(String(element['title']).includes(value)){
          this.array.push(element);
          this.word = value;
        } 
      }); 
    }
  );
});
}

getBook() {
    return this.http.get("http://localhost:8000/book/list").pipe(
    map(res=> console.log(res)));
   }
}
