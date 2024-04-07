import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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