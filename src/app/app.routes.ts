import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'add-book',
        component: AddBookComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }, 
    {
        path: '',
        component: BooksComponent
    }, 
    {
        path: '**',
        component: NotFoundComponent
    }
];
