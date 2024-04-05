import { NgModule, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';




@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormControl,
        Validators,
        CommonModule,
        RouterModule.forRoot(routes,  {
            useHash: true
          }),
        AppRoutingModule,
        AppModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }