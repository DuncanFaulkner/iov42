import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScreens } from './view-screens';

describe('ViewScreens', () => {
  let component: ViewScreens;
  let fixture: ComponentFixture<ViewScreens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewScreens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewScreens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
