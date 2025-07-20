import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCinema } from './add-cinema';

describe('AddCinema', () => {
  let component: AddCinema;
  let fixture: ComponentFixture<AddCinema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCinema]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCinema);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
