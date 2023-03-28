import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteRegaloComponent } from './restaurante-regalo.component';

describe('RestauranteRegaloComponent', () => {
  let component: RestauranteRegaloComponent;
  let fixture: ComponentFixture<RestauranteRegaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteRegaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteRegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
