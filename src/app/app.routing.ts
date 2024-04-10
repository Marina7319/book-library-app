import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'books', component: BooksComponent},
    { path: '', component: HeaderComponent},
    {
        path:'**', component:NotFoundComponent
    }

]);
