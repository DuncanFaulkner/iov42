import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';
import { Cinema, CinemaResponse } from '../model/cinema-model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private readonly http = inject(HttpClient);

  getCinemas(): Observable<CinemaResponse> {
    return this.http.get<CinemaResponse>(`${BASE_URL}/cinemas?size=150`);
  }

  addCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${BASE_URL}/cinemas`, cinema);
  }

  addScreen(id: number | undefined, cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${BASE_URL}/cinemas/${id}/screens`, cinema);
  }
}
