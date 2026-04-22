import { Component } from '@angular/core';
import { TechListComponent } from './components/tech-list/tech-list'; // Додали імпорт

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TechListComponent], // Додали в imports
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Лабораторна робота №2';
}
