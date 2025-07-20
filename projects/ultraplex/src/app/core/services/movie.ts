import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';
import { Movie, MovieResponse } from '../model/movie-model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly http = inject(HttpClient);

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${BASE_URL}/movies?size=150`);
  }

  addMovies(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${BASE_URL}/movies`, movie);
  }
}
