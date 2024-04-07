import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from '../add-book/add-book.component';




@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, AddBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
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
