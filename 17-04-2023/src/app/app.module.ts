import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogBoxComponent}from './dialog-box/dialog-box.component';
import{MatButtonModule}from '@angular/material/button';
import {MatIconModule}from '@angular/material/icon';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{FormsModule}from'@angular/forms';
import{MatDialogModule}from'@angular/material/dialog';
import {MatDatepickerModule}from '@angular/material/datepicker';
import {MatNativeDateModule}from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }