import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddCinema } from './add-cinema';

describe('AddCinema', () => {
  let component: AddCinema;
  let fixture: ComponentFixture<AddCinema>;

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
      imports: [AddCinema],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCinema);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
