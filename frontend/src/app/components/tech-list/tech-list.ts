import { Component } from '@angular/core';
import { TechItemComponent } from '../tech-item/tech-item'; // Шлях до дочірнього

@Component({
  selector: 'app-tech-list',
  standalone: true,
  imports: [TechItemComponent], // Обов'язково імпортуємо дочірній компонент!
  templateUrl: './tech-list.html',
  styleUrl: './tech-list.scss'
})
export class TechListComponent {
  technologies = [
    { id: 1, name: 'React', learned: true },
    { id: 2, name: 'JavaScript', learned: true },
    { id: 3, name: 'Node.js', learned: false },
    { id: 4, name: 'SCSS', learned: true },
    { id: 5, name: 'Angular', learned: false }
  ];

  // Ця функція спрацює, коли дочірній компонент надішле подію
  handleToggle(id: number) {
    const tech = this.technologies.find(t => t.id === id);
    if (tech) {
      tech.learned = !tech.learned;
    }
  }
}
