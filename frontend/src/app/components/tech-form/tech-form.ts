import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TechItemComponent } from '../tech-item/tech-item';

@Component({
  selector: 'app-tech-form',
  standalone: true,
  // Обов'язково імпортуємо ReactiveFormsModule для роботи реактивних форм
  imports: [ReactiveFormsModule],
  templateUrl: './tech-form.html',
  styleUrl: './tech-form.scss'
})
export class TechFormComponent {
  // Output для передачі нової технології в батьківський компонент
  @Output() addTech = new EventEmitter<string>();

  // Створюємо нашу реактивну форму
  techForm = new FormGroup({
    techName: new FormControl('', [
      Validators.required, // Поле обов'язкове
      Validators.minLength(2) // Мінімальна довжина - 2 символи
    ])
  });

  // Функція, яка спрацює при натисканні "Додати"
  onSubmit() {
    if (this.techForm.valid) {
      // Якщо форма валідна, відправляємо назву наверх
      const newTechName = this.techForm.value.techName;
      if (newTechName) {
        this.addTech.emit(newTechName);
        this.techForm.reset(); // Очищаємо форму після додавання
      }
    } else {
      // Якщо невалідна - показуємо помилки
      this.techForm.markAllAsTouched();
    }
  }
}
