import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, RegisterComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';


  isLogin: boolean = true;

  errorMessage: string = "";

  constructor(private router: Router, private http: HttpClient) 
  {
    
  }

  login()
  {

    let bodyDate = {
      email: this.email,
      password: this.password,
    };
    console.log(this.email);
    console.log(this.password);
    this.http.post("http://localhost:8000/user/login", bodyDate)
    .subscribe((resultData: any) => {
    console.log(resultData);

    if (resultData.status)
      {
        this.router.navigateByUrl('/home');
    
      }
      else 
      {
        alert("Incorrect Email or Password");
        console.log("Error login");
      }
  });
}
}
