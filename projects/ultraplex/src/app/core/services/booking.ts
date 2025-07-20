import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';
import { BookingResponse } from '../model/booking-model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private readonly http = inject(HttpClient);

  getBookings(): Observable<BookingResponse> {
    return this.http.get<BookingResponse>(`${BASE_URL}/bookings?size=150`);
  }
}
