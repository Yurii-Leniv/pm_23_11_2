import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Tech {
  id: number;
  name: string;
  learned: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TechService {
  private apiUrl = 'http://localhost:3000/api/tech';

  constructor(private http: HttpClient) {}

  getTechs(): Observable<Tech[]> {
    return this.http.get<Tech[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Помилка отримання даних у сервісі:', error);
        return throwError(() => new Error('Не вдалося завантажити дані з сервера'));
      })
    );
  }

  updateTechs(techs: Tech[]): Observable<any> {
    return this.http.post(this.apiUrl, techs).pipe(
      catchError(error => {
        console.error('Помилка збереження у сервісі:', error);
        return throwError(() => new Error('Не вдалося зберегти дані на сервері'));
      })
    );
  }
}
