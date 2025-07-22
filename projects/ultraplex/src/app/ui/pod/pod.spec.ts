import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { Pod } from './pod';

describe('Pod', () => {
  let component: Pod;
  let fixture: ComponentFixture<Pod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [[provideZonelessChangeDetection(), provideHttpClient()]],
      imports: [Pod],
    }).compileComponents();

    fixture = TestBed.createComponent(Pod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
