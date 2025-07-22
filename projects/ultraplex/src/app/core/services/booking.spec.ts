import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { BookingResponse } from '../model/booking-model';
import { BookingService } from './booking';

const fakeBooking: BookingResponse = {
  content: [
    {
      id: 14,
    },
    {
      id: 17,
    },
    {
      id: 18,
    },
    {
      id: 86,
    },
  ],
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    offset: 0,
    pageNumber: 0,
    pageSize: 150,
    paged: true,
    unpaged: false,
  },
  totalPages: 1,
  totalElements: 4,
  last: true,
  size: 150,
  number: 0,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  numberOfElements: 4,
  first: true,
  empty: false,
};

describe('Booking', () => {
  let service: BookingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookingService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    }).compileComponents();

    service = TestBed.inject(BookingService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return bookings from api call', (done) => {
    service.getBookings().subscribe({
      next: (response) => {
        expect(response).toEqual(fakeBooking);
        done();
      },
      error: (error) => done.fail(error),
    });

    const requests = httpTestingController.match((req) => true);

    if (requests.length === 0) {
      fail('No HTTP requests were made');
      return;
    }

    const req = requests[0];
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('size')).toBe('150');
    req.flush(fakeBooking);
  });
});
