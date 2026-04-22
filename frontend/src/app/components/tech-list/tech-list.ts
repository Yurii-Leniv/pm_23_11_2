import { Component, OnInit } from '@angular/core';
import { TechItemComponent } from '../tech-item/tech-item';
import { TechFormComponent } from '../tech-form/tech-form'; // <-- Імпорт форми
import { TechService, Tech } from '../../services/tech';

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [TechItemComponent, TechFormComponent], // <-- Додай TechFormComponent сюди
  templateUrl: './tech-list.html',
  styleUrl: './tech-list.scss'
})
export class TechListComponent implements OnInit {
  technologies: Tech[] = [];

  constructor(private techService: TechService) {}

  ngOnInit() {
    this.loadTechs();
  }

  loadTechs() {
    this.techService.getTechs().subscribe({
      next: (data) => this.technologies = data,
      error: (err) => console.error(err)
    });
  }

  // Метод для додавання нової технології (спрацює при події з форми)
  onAddTech(name: string) {
    // Створюємо новий об'єкт
    const newTech: Tech = {
      id: this.technologies.length > 0 ? Math.max(...this.technologies.map(t => t.id)) + 1 : 1,
      name: name,
      learned: false
    };

    // Додаємо в локальний масив
    const updatedList = [...this.technologies, newTech];

    // Відправляємо оновлений список на сервер
    this.techService.updateTechs(updatedList).subscribe({
      next: () => {
        this.technologies = updatedList;
        console.log('Нову технологію додано та збережено на сервері!');
      },
      error: (err) => console.error('Помилка при додаванні:', err)
    });
  }

  handleToggle(id: number) {
    const tech = this.technologies.find(t => t.id === id);
    if (tech) {
      tech.learned = !tech.learned;
      this.techService.updateTechs(this.technologies).subscribe();
    }
  }
}
