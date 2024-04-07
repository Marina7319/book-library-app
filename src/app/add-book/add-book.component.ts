import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'add-book',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)  {     }

  ngOnInit():void{
    this.form = this.formBuilder.group({
      title: "",
      writer:"",
      genre:""
    });
  }

  submit(): void{
    let book = this.form.getRawValue();
    console.log(book);
    if(book.title == "" || book.writer == "" || book.genre == "") {
      alert("Student Not Registered Successfully");        
    }else {
      this.http.post("http://localhost:8000/book/add", book).subscribe(() =>
          this.router.navigate(['/']) ,(err) => {
            alert("Error");
      })      
    }
  }
//   title: string ="";
//   writer: string ="";
//   genre: string = "";
//   BooksArray : any[] = [];
//   currentBookID = "";

  
//   constructor(private router: Router, private http: HttpClient) { 
//     this.getAllBook();
//   }

//   addingBook()
//   {
//     let bodyData = 
//     {
//       "title" : this.title,    
//       "writer" : this.writer,     
//       "genre" : this.genre
//     };

//     this.http.post("http://localhost:8000/book/create",bodyData)
//     .subscribe((resultData) =>
//     {
//       console.log(resultData);
//       alert("Book Added To List Successfully");
//       this.title = ""; 
//       this.writer = ""; 
//       this.genre = "";
//       this.getAllBook();
//     });
//   }

//   add() 
//   {
//     if(this.currentBookID == '') 
//       {
//         this.addingBook();
//       } else { 
//         this.UpdateRecords();
//       }
//   }

//   getAllBook() { 
//     this.http.get("http://localhost:8000/book/getAll")
//     .subscribe((resultData: any) => {
//       console.log(resultData);
//       this.BooksArray = resultData.data;
//     });
//   }

// setDelete(data: any) { 
//   this.http.delete("http://localhost:8000/book/delete"+ "/"+ data._id).subscribe((resultData: any) => {
//   console.log(resultData);
//   alert("Book Deleted");
//   this.getAllBook();
// })
// }
//   setUpdate(data: any) {
//     this.title = data.title;
//     this.writer = data.writer;
//     this.genre = data.genre;
//     this.currentBookID = data._id;
//     alert(this.currentBookID);
//   }

//   UpdateRecords() {
//     let bodyData = {
//       "title" : this.title,
//       "writer" : this.writer,
//       "genre" : this.genre
//     };

//     this.http.patch("http://localhost:8000/book/update"+"/"+this.currentBookID,bodyData).subscribe((resultData: any) =>
//     {
//       console.log(resultData);
//       alert("Book Updated");
//      this.getAllBook();
//     });  
//   }
}
