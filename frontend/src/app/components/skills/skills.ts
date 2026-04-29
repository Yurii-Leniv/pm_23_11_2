import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TechService, Tech } from '../../services/tech';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  techList: Tech[] = [];

  // Реактивна форма з 4-ї лаби
  techForm = new FormGroup({
    techName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])
  });

  constructor(private techService: TechService) {}

  ngOnInit() {
    this.loadTechs();
  }

  // Завантаження списку з сервера (Лаба 3)
  loadTechs() {
    this.techService.getTechs().subscribe({
      next: (data) => this.techList = data,
      error: (err) => console.error('Помилка завантаження:', err)
    });
  }

  // Додавання нової навички
  onSubmit() {
    if (this.techForm.valid) {
      const name = this.techForm.value.techName;
      if (name) {
        const newTech: Tech = {
          id: this.techList.length > 0 ? Math.max(...this.techList.map(t => t.id)) + 1 : 1,
          name: name,
          learned: false
        };

        const updatedList = [...this.techList, newTech];

        this.techService.updateTechs(updatedList).subscribe({
          next: () => {
            this.techList = updatedList;
            this.techForm.reset();
            console.log('Навичку успішно додано!');
          },
          error: (err) => console.error('Помилка додавання:', err)
        });
      }
    } else {
      this.techForm.markAllAsTouched();
    }
  }

  // Зміна статусу "вивчено" при кліку на прогрес-бар
  toggleTech(id: number) {
    const tech = this.techList.find(t => t.id === id);
    if (tech) {
      tech.learned = !tech.learned;
      this.techService.updateTechs(this.techList).subscribe();
    }
  }
}
