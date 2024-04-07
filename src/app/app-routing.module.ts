import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'home',component: HomeComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'add-book', component: AddBookComponent},
    {path: '', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


