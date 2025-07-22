import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CinemaResponse } from '../model/cinema-model';
import { CinemaService } from './cinema';

const fakeCinema: CinemaResponse = {
  content: [
    {
      id: 2,
      name: 'London centre',
      screens: [
        {
          id: 227,
          name: '',
        },
      ],
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
  totalPages: 101,
  totalElements: 101,
  last: false,
  size: 150,
  number: 0,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  numberOfElements: 1,
  first: true,
  empty: false,
};

describe('Cinema', () => {
  let service: CinemaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CinemaService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    }).compileComponents();

    service = TestBed.inject(CinemaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return cinema from api call', (done) => {
    service.getCinemas().subscribe({
      next: (response) => {
        expect(response).toEqual(fakeCinema);
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
    req.flush(fakeCinema);
  });
});
