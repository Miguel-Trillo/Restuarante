import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Credenciales hardcodeadas
  private readonly VALID_USERNAME = 'admin';
  private readonly VALID_PASSWORD = 'admin';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === this.VALID_USERNAME && this.password === this.VALID_PASSWORD) {
      // Autenticación exitosa
      this.errorMessage = '';
      this.router.navigate(['/main']);
    } else {
      // Autenticación fallida
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
