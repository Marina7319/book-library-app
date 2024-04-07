import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
 // form: FormGroup;
  firstname: string ='';
  lastname: string ='';
  email: string = '';
  password: string = '';
  submitted = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,private router: Router
  ) { 
  }
  ngOnInit(): void 
  {
    // this.form = this.formBuilder.group({
    //   firstname:"",
    //   lastname:"",
    //   email: "",
    //   password: ""
    // })
  }
// submit(): void {
//   let bodyData = 
//     {
//       "firstname" : this.firstname,    
//       "lastname" : this.lastname,     
//       "email" : this.email,
//       "password" : this.password,
//     };
    
//   let user = this.form.getRawValue()
//   console.log(user);
//   if(user.lastname == "" || user.email == "" || user.firstname == "" || user.password == "") {
//     alert("Student Not Registered Successfully");
//  // } else if (this.ValidateEmail(user.email)) {
//    // alert("Error");
//   } else {
//         this.http.post("http://localhost:8000/user/create", bodyData)
//     .subscribe((resultData: any) =>
//       {
//       console.log(resultData);
//       alert("Student Registered Successfully");
//     });

//   }
// }

  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,    
      "lastname" : this.lastname,     
      "email" : this.email,
      "password" : this.password,
    };
    
   // if(this.firstname.length >= 3 && this.lastname.length >= 3 && this.email.length >= 3 && this.password.length >= 3 ) {
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
