import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ButtonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
})
export class AppModule { }