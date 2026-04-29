import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) },
  // Замінили dashboard на resume-layout
  { path: 'resume', loadComponent: () => import('./components/resume-layout/resume-layout').then(m => m.ResumeLayoutComponent), canActivate: [authGuard] },
  // Перенаправляємо на resume
  { path: '', redirectTo: 'resume', pathMatch: 'full' }
];
