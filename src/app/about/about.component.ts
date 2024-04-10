import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Emitters } from '../emitters/emitter';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  firstname = ''
  lastname = ''
  email = ''


constructor(private http: HttpClient) {
  
}
ngOnInit(): void {
  this.http.get("http://localhost:8000/user/username", {withCredentials:true})
  .subscribe((res:any) => {
    this.firstname = `${res.firstname}`
    this.lastname = `${res.lastname}`
    this.email = `${res.email}`
    Emitters.authEmitter.emit(true);
  }
);
}
}
