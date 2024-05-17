// student-login.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css'],

})
export class StudentLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Implemente a lógica de autenticação aqui
    if (this.username === 'TESTE' && this.password === '123') {
      // Autenticação bem-sucedida
      // Redirecionar para a página desejada, por exemplo, a página inicial
      this.router.navigate(['/students']);
    } else {
      // Autenticação falhou
      alert('Nome de usuário ou senha incorretos.');
    }
  }
}
