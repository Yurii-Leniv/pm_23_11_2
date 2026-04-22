import { Routes } from '@angular/router';
import { TechListComponent } from './components/tech-list/tech-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) },
  { path: 'dashboard', component: TechListComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
