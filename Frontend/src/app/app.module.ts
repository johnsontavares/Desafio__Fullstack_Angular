import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolsComponent } from './Schools/Schools.component';
import { StudentsRoutingModule } from './students/students-routing.module';
import { SchoolsRoutingModule } from './Schools/Schools-routing.module';
import { StudentsModule } from './students/students.module';
import { Schoolsmodule } from './Schools/Schools.module';
import { RouterModule } from '@angular/router';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    Schoolsmodule,
    HttpClientModule,
    NgbModule,
    FormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
