import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { MovieResponse } from '../model/movie-model';
import { MovieService } from './movie';

const fakeMovie: MovieResponse = {
  content: [
    {
      id: 1,
      name: 'Lord of the rings',
      runtime: 180,
    },
    {
      id: 5,
      name: 'Spiderman 1',
      runtime: 120,
    },
    {
      id: 6,
      name: 'Inception',
      runtime: 166,
    },
    {
      id: 23,
      name: 'Rear Window',
      runtime: null,
    },
    {
      id: 36,
      name: 'The man who knew too much',
      runtime: null,
    },
    {
      id: 37,
      name: 'Barton Fink',
      runtime: null,
    },
    {
      id: 38,
      name: 'Lost highway',
      runtime: 112,
    },
    {
      id: 41,
      name: 'Harry Potter',
      runtime: null,
    },
    {
      id: 42,
      name: 'Star Wars',
      runtime: 119,
    },
    {
      id: 48,
      name: '8',
      runtime: 8,
    },
    {
      id: 67,
      name: 'aaa',
      runtime: 2,
    },
    {
      id: 68,
      name: 'm001',
      runtime: 20,
    },
    {
      id: 69,
      name: 'moo2',
      runtime: 2,
    },
    {
      id: 70,
      name: 'moo3',
      runtime: 3,
    },
    {
      id: 71,
      name: 'moo4',
      runtime: 44,
    },
    {
      id: 72,
      name: 'moo6',
      runtime: 3,
    },
    {
      id: 73,
      name: 'moo5',
      runtime: 44,
    },
    {
      id: 74,
      name: 'moo5',
      runtime: 333,
    },
    {
      id: 75,
      name: 'moo7',
      runtime: 444,
    },
    {
      id: 76,
      name: 'moo6',
      runtime: 44,
    },
    {
      id: 77,
      name: 'moo88',
      runtime: 88,
    },
    {
      id: 82,
      name: '12 angry men',
      runtime: 174,
    },
    {
      id: 91,
      name: 'Movie Name 555',
      runtime: 190,
    },
    {
      id: 96,
      name: 'noe',
      runtime: 85,
    },
    {
      id: 97,
      name: 'newmovie',
      runtime: 65,
    },
    {
      id: 98,
      name: 'Spiderman 3',
      runtime: 123,
    },
    {
      id: 104,
      name: 'Looper',
      runtime: 180,
    },
    {
      id: 163,
      name: null,
      runtime: null,
    },
    {
      id: 164,
      name: null,
      runtime: null,
    },
    {
      id: 165,
      name: null,
      runtime: null,
    },
    {
      id: 166,
      name: 'Forest Gump',
      runtime: 120,
    },
    {
      id: 167,
      name: 'Forest Gump 2',
      runtime: 120,
    },
    {
      id: 168,
      name: 'Empire strikes back',
      runtime: 44,
    },
    {
      id: 169,
      name: 'Empire strikes back',
      runtime: 44,
    },
    {
      id: 170,
      name: 'Forest Gump',
      runtime: 120,
    },
    {
      id: 171,
      name: 'Forest Gump',
      runtime: 120,
    },
    {
      id: 172,
      name: null,
      runtime: null,
    },
    {
      id: 173,
      name: 'Forest Gump',
      runtime: 120,
    },
    {
      id: 174,
      name: 'Forest Gump',
      runtime: 120,
    },
    {
      id: 176,
      name: 'The simpsons',
      runtime: 120,
    },
    {
      id: 181,
      name: 'The simpsons 2',
      runtime: 120,
    },
    {
      id: 186,
      name: 'titanic',
      runtime: 180,
    },
    {
      id: 187,
      name: 'sponge bob',
      runtime: 120,
    },
    {
      id: 205,
      name: 'Heads of State',
      runtime: 22,
    },
    {
      id: 206,
      name: 'the producer',
      runtime: 127,
    },
    {
      id: 207,
      name: '',
      runtime: 0,
    },
    {
      id: 208,
      name: null,
      runtime: 220,
    },
    {
      id: 209,
      name: 'empire strike back',
      runtime: 187,
    },
    {
      id: 212,
      name: null,
      runtime: null,
    },
    {
      id: 213,
      name: null,
      runtime: null,
    },
    {
      id: 214,
      name: null,
      runtime: null,
    },
    {
      id: 218,
      name: null,
      runtime: null,
    },
    {
      id: 219,
      name: null,
      runtime: null,
    },
    {
      id: 220,
      name: null,
      runtime: null,
    },
    {
      id: 225,
      name: null,
      runtime: null,
    },
    {
      id: 226,
      name: null,
      runtime: null,
    },
    {
      id: 232,
      name: 'sdaf',
      runtime: 500000,
    },
    {
      id: 233,
      name: null,
      runtime: null,
    },
    {
      id: 234,
      name: null,
      runtime: null,
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
  totalPages: 59,
  totalElements: 59,
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

describe('Movie', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection(),
      ],
    }).compileComponents();

    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return movies from api call', (done) => {
    service.getMovies().subscribe({
      next: (response) => {
        expect(response).toEqual(fakeMovie);
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
    req.flush(fakeMovie);
  });
});
