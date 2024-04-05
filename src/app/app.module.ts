import { NgModule, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';




@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ButtonModule
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
})
export class AppModule { }