import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // <-- Додали цей імпорт

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient() // <-- Увімкнули клієнт тут
  ]
};
