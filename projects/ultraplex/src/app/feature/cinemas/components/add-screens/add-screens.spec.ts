import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreens } from './add-screens';

describe('AddScreens', () => {
  let component: AddScreens;
  let fixture: ComponentFixture<AddScreens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScreens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScreens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
