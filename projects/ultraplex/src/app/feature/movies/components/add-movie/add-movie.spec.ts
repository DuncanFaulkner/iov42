import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMovie } from './add-movie';

describe('AddMovie', () => {
  let component: AddMovie;
  let fixture: ComponentFixture<AddMovie>;

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
      imports: [AddMovie],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
