import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteInfoComponent } from './restaurante-info.component';

describe('RestauranteInfoComponent', () => {
  let component: RestauranteInfoComponent;
  let fixture: ComponentFixture<RestauranteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
