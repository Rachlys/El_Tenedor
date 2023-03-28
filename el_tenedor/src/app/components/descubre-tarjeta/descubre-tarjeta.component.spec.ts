import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreTarjetaComponent } from './descubre-tarjeta.component';

describe('DescubreTarjetaComponent', () => {
  let component: DescubreTarjetaComponent;
  let fixture: ComponentFixture<DescubreTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubreTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubreTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
