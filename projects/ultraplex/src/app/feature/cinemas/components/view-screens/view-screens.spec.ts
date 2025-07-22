import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { ViewScreens } from './view-screens';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ViewScreens', () => {
  let component: ViewScreens;
  let fixture: ComponentFixture<ViewScreens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        [
          provideZonelessChangeDetection(),
          provideHttpClient(),
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
        ],
      ],
      imports: [ViewScreens],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewScreens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
