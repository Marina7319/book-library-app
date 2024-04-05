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



@NgModule({
    declarations: [
        // AppComponent,
       //  RegisterComponent,
       // LoginComponent,
      //  HomeComponent
    ],
    exports: [RouterModule],
    providers: [  ],
   // bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormControl,
        Validators
     
        
        
    ]
})
export class AppModule { }