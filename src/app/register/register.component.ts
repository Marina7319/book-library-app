import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'register',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)  {     }
  ngOnInit():void{
    this.form = this.formBuilder.group({
      firstname: "",
      lastname:"",
      email:"",
      password:"",
    });
  }
  submit(): void{
    let user = this.form.getRawValue();
    console.log(user);
    if(user.lastname == "" || user.email == "" || user.firstname == "" || user.password == "") {
      alert("User Not Registered Successfully");        
    }else {
      this.http.post("http://localhost:8000/user/create", user, {
      withCredentials: true
      }).subscribe(() =>
          this.router.navigate(['/home']) ,(err) => {
            alert("Error");
      })      
    }
  }
}
