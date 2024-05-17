import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './Schools.component';
import { SchoolsRoutingModule } from './Schools-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ],
  exports:[SchoolsComponent],
  bootstrap:[SchoolsComponent]
})
export class Schoolsmodule { }
