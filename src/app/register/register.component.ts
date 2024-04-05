import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  firstname: string ="";
  lastname: string ="";
  email: string = "";
  password: string = "";

ngOnInit(): void {}
  constructor(private http: HttpClient) { 

  }

  register()
  {
    let bodyData = {
      "firstname": this.firstname ,    
        "lastname": this.lastname ,     
         "email": this.email ,
      "password": this.password
    };
    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("Student Register Successfully");
    });
  }

  save() 
  {
    this.register();
  }

}
