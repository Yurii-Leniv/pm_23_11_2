import { Component, OnInit } from '@angular/core';
import { TechItemComponent } from '../tech-item/tech-item';
import { TechService, Tech } from '../../services/tech';

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [TechItemComponent],
  templateUrl: './tech-list.html',
  styleUrl: './tech-list.scss'
})
export class TechListComponent implements OnInit {
  technologies: Tech[] = [];

  constructor(private techService: TechService) {}

  // Цей метод має автоматично запуститися при відкритті сторінки
  ngOnInit() {
    console.log('1. Angular намагається отримати дані...');

    this.techService.getTechs().subscribe({
      next: (data) => {
        console.log('2. Дані успішно отримані з сервера:', data);
        this.technologies = data;
      },
      error: (err) => console.error('Помилка HTTP:', err)
    });
  }

  handleToggle(id: number) {
    const tech = this.technologies.find(t => t.id === id);
    if (tech) {
      tech.learned = !tech.learned;

      this.techService.updateTechs(this.technologies).subscribe({
        next: (response) => console.log('Успіх збереження:', response),
        error: (err) => console.error('Помилка збереження:', err)
      });
    }
  }
}
