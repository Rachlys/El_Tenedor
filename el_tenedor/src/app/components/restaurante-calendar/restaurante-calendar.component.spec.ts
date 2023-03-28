import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCalendarComponent } from './restaurante-calendar.component';

describe('RestauranteCalendarComponent', () => {
  let component: RestauranteCalendarComponent;
  let fixture: ComponentFixture<RestauranteCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
