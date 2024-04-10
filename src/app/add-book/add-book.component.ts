import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'add-book',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  form!: FormGroup;


  arr = []
  array = []
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)  
  {   
this.getBook();
  }

  ngOnInit():void{
    this.form = this.formBuilder.group({
      title: "",
      writer:"",
      genre:""
    });
    this.http.get("http://localhost:8000/book/list")
    .subscribe((res:any) => {
      this.arr = res
    }
  );
}


  submit(): void{
    let book = this.form.getRawValue();
    console.log(book);
    if(book.title == "" || book.writer == "" || book.genre == "") {
      alert("Book Not Added Successfully");        
    }else {
      this.http.post("http://localhost:8000/book/add", book).subscribe(() =>
          this.router.navigate(['/']) ,(err) => {
            alert("Error");
      })      
    }
  }

  getBook() {
    return this.http.get("http://localhost:8000/book/list").pipe(
    map(res=> console.log(res)));
  }
}

