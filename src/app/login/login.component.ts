import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { routes } from '../app.routes';


@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule, HomeComponent, RegisterComponent, routes],
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
    console.log(this.email);
    console.log(this.password);

    let bodyDate = {
      email: this.email,
      password: this.password,
    };

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
