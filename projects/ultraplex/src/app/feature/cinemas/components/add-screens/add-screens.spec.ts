import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddScreens } from './add-screens';

describe('AddScreens', () => {
  let component: AddScreens;
  let fixture: ComponentFixture<AddScreens>;

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
      imports: [AddScreens],
    }).compileComponents();

    fixture = TestBed.createComponent(AddScreens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
