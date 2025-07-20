import { Routes } from '@angular/router';
import { App } from './app';
import { PageNotFound } from './feature/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./feature/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'cinemas',
        loadComponent: () =>
          import('./feature/cinemas/cinemas').then((m) => m.Cinemas),
      },
      {
        path: 'movies',
        loadComponent: () =>
          import('./feature/movies/movies').then((m) => m.Movies),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: PageNotFound },
    ],
  },
];
