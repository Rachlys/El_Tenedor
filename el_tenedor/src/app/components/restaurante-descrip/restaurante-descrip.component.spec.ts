import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDescripComponent } from './restaurante-descrip.component';

describe('RestauranteDescripComponent', () => {
  let component: RestauranteDescripComponent;
  let fixture: ComponentFixture<RestauranteDescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteDescripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
