import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tech-item',
  standalone: true,
  templateUrl: './tech-item.html', // Перевір, чи збігається назва файлу html
  styleUrl: './tech-item.scss'     // Перевір, чи збігається назва файлу scss
})
export class TechItemComponent {
  // Приймаємо дані від батька
  @Input() tech!: { id: number, name: string, learned: boolean };

  // Відправляємо подію батьку
  @Output() toggleStatus = new EventEmitter<number>();

  onToggle() {
    this.toggleStatus.emit(this.tech.id);
  }
}
