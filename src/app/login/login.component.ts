import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
      private router: Router
    ) 
    {
    }

  ngOnInit():void{
    this.form = this.formBuilder.group({
      email:"",
      password:"",
    });
  }
  login():void {
    let user = this.form.getRawValue();
    console.log(user);
      if(user.lastname == "" || user.email == "" || user.firstname == "" || user.password == "") {
        alert("Student Not Logged Successfully");
      } else {
        this.http.post("http://localhost:8000/user/login", user, {
        withCredentials:true
      }).subscribe((res) => this.router.navigate(['/']),
      (err) => { 
        console.log("Error login");
        alert("Incorrect Email or Password 2");
        })
      }
  }
}
