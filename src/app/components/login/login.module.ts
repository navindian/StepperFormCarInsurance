import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule,FormsModule,ReactiveFormsModule,MatCardModule,FlexLayoutModule,BrowserModule,
    BrowserAnimationsModule,MatButtonModule,MatDividerModule,MatFormFieldModule,MatInputModule,LoginComponent
  ]
})
export class LoginModule { }



