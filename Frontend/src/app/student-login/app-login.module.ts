import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { StudentLoginComponent } from './student-login.component';
import { CommonModule } from '@angular/common';
import { AppStudentRoutingModule } from './app-login-routing.module';

// Outros imports...

@NgModule({
  declarations: [StudentLoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    AppStudentRoutingModule
  ],
  exports: [StudentLoginComponent],
  bootstrap:[StudentLoginComponent]
  // Outras configurações...
})
export class ApLoginpModule { }
