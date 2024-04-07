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
  form: FormGroup;

  isActive = true;
  email: string = '';
  password: string = '';

  isLogin: boolean = true;

  errorMessage: string = "";  
  loginForm() {
    // var result = this.loginService.login(this.form.controls['username'].value,
    //   this.form.controls['password'].value);

    // if (!result) {
    //   this.form.controls['password'].setErrors({
    //     invalidLogin: true
    //   });
    // }
  }

  constructor(private router: Router, private http: HttpClient, fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  login() {

    let bodyDate = {
      email: this.email,
      password: this.password,
    };
    this.http.post("http://localhost:8000/user/login", bodyDate)
      .subscribe((resultData: any) => {
        console.log(resultData);

        if (resultData.status) {
          this.router.navigateByUrl('/home');
        }
        else {
          alert("Incorrect Email or Password");
          console.log("Error login");
        }
      });
  }
}
