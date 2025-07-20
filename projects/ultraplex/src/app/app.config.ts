import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { routes } from './app.routes';

const OPTIONS = {
  appearance: 'outline',
  hideRequiredMarker: false,
};
const DIALOG_OPTIONS = {
  hasBackdrop: true,
  disableClose: true,
  width: '500px',
  height: '300px',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        ...OPTIONS,
      },
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { ...DIALOG_OPTIONS } },
  ],
};
