import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


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


  constructor(
    private router: Router,
     private http: HttpClient, 
     fb: FormBuilder) {

  }

  ngOnInit(): void { 

  }
  login():void {



    let bodyDate = {
      email: this.email,
      password: this.password,
    };
    if(bodyDate.email == "" || bodyDate.password == "") {
              console.log("Error login");
          alert("Incorrect Email or Password 1");
    } else {
      this.http.post("http://localhost:8000/user/login", bodyDate, {
        withCredentials:true
      })
      .subscribe(
        (res) => this.router.navigate(['/home']),
        (err) => { 
          console.log("Error login");
          alert("Incorrect Email or Password 2");
        }
      )
    }
    // this.http.post("http://localhost:8000/user/login", bodyDate)
    //   .subscribe((resultData: any) => {
    //     console.log(resultData);

    //     if (resultData.status) {
    //       this.router.navigateByUrl('/home');
    //     }
    //     else {
    //       console.log("Error login");
    //       alert("Incorrect Email or Password");
    //     }
    //   });
  }
}
