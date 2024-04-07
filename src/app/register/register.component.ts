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

  constructor(
    private formBuilder: FormBuilder,
     private http: HttpClient,
      private router: Router
    ) 
    {

    }

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
         //  alert("Student Not Registered Successfully");        
         }else {
               this.http.post("http://localhost:8000/user/create", user, {
                 withCredentials: true
               }).subscribe(() =>
                 this.router.navigate(['/']) ,(err) => {
                // alert("Error");
               })      
         }
}
//this.router.navigateByUrl('/home');
 // form: FormGroup;
  // firstname: string ='';
  // lastname: string ='';
  // email: string = '';
  // password: string = '';
  // submitted = false;

  // constructor(private http: HttpClient, private formBuilder: FormBuilder,private router: Router
  // ) { 
  // }
  // ngOnInit(): void 
  // {
    // this.form = this.formBuilder.group({
    //   firstname:"",
    //   lastname:"",
    //   email: "",
    //   password: ""
    // })
  //}
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

  // register()
  // {
  //   let bodyData = 
  //   {
  //     "firstname" : this.firstname,    
  //     "lastname" : this.lastname,     
  //     "email" : this.email,
  //     "password" : this.password,
  //   };
    
  //   if(this.firstname == "" && this.lastname == "" && this.email
  //     == "" && this.password == "" ) {  
  //       alert("ERROR");
  //     } else if () {

  //     }
  //   this.http.post("http://localhost:8000/user/create",bodyData)
  //   .subscribe((resultData: any) =>
  //     {
  //     console.log(resultData);
  //     alert("Student Registered Successfully");
  //   });
  // }
  

  // save() 
  // {
  //   this.register();
  // }

}
