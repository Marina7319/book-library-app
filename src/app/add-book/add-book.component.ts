import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  title: string ="";
  writer: string ="";
  genre: string = "";

  
  constructor(private router: Router, private http: HttpClient) { 
    // this.getUser();
    // const localUser = localStorage.getItem('loggedUser');
    // if(localUser != null) 
    //   { 
    //     this.loggedUser = JSON.parse(localUser);
    //   }
    this.getAllStudent();
  }

  ngOnInit(): void 
  {

  }

  addingBook()
  {
    let bodyData = 
    {
      "title" : this.title,    
      "writer" : this.writer,     
      "genre" : this.genre
    };
    this.http.post("http://localhost:8000/book/create",bodyData)
    .subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("Book Added To List Successfully");
      this.title = ""; 
      this.writer = ""; 
      this.genre = "";
    });

  }

  save() 
  {
    this.addingBook();
  }

  Books : any[] = [];

  currentUserID = "";
  








  getUser() { 

   
    let bodyDate = {
      email: this.email,
      password: this.password,
    };
    console.log(this.email);
    console.log(this.password);
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any) => {
      console.log(resultData);
      this.Users = resultData.data;
    })
  }

}
