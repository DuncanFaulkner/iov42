import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { BookingService } from '../../core/services/booking';
import { CinemaService } from '../../core/services/cinema';
import { MovieService } from '../../core/services/movie';
import { Pod } from '../../ui/pod/pod';

@Component({
  selector: 'app-dashboard',
  imports: [Pod],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly route = inject(Router);
  private readonly cinemaService = inject(CinemaService);
  private readonly movieService = inject(MovieService);
  private readonly bookingService = inject(BookingService);

  protected readonly cinemas = toSignal(this.cinemaService.getCinemas());
  protected readonly movies = toSignal(this.movieService.getMovies());
  protected readonly booking = toSignal(this.bookingService.getBookings());

  readonly totalScreens = computed(() => {
    return this.cinemas()?.content.reduce(
      (sum: number, item: { screens: string | any[] }) =>
        sum + item.screens.length,
      0
    );
  });

  selectCinemas() {
    this.route.navigate(['/cinemas']);
  }

  selectScreening() {
    this.route.navigate(['/']);
  }

  selectMovie() {
    this.route.navigate(['/movies']);
  }

  selectBooking() {
    this.route.navigate(['/']);
  }
}
