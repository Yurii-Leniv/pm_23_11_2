import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div style="text-align: center; margin-top: 100px;">
      <h2>Вхід у систему</h2>
      <button (click)="login()" style="padding: 10px 20px; cursor: pointer;">Увійти як Юрій</button>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }
}
