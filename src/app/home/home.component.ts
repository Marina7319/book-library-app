import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstname: string ="";
  lastname: string ="";
  email: string = "";
  password: string = "";
  loggedUser: any;

  
  Users : any[] = [];

  currentUserID = "";
  






  constructor(private router: Router, private http: HttpClient) { 
    this.getUser();
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) 
      { 
        this.loggedUser = JSON.parse(localUser);
      }
  }


  getUser() { 

   
    let bodyDate = {
      email: this.email,
      password: this.password,
    };
    console.log(this.email);
    console.log(this.password);
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any) => {
      console.log(resultData);
      this.Users = resultData.data;
    })
  }


  setDelete(data: any) { 

  }

  setUpdate(data: any) { 
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.password = data.password;

    alert(this.currentUserID);
  }
  
// UpdateRecords() { 
//   let bodyData = {
//     "firstname" : this.firstname,
//     "lastname" : this.lastname,
//     "email" : this.email
//   };

//   this.http.patch("http://localhost:9001/user/update"+"/"+this.currentEmployeeId, bodyData)
//   .subscribe(())
// }

}
