import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  firstname: string ="";
  lastname: string ="";
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient) { 
  }
  ngOnInit(): void 
  {
  }

  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,    
      "lastname" : this.lastname,     
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:8000/user/create",bodyData)
    .subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("Student Registered Successfully");
    });
  }

  save() 
  {
    this.register();
  }

}
