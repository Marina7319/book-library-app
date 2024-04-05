import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule],
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