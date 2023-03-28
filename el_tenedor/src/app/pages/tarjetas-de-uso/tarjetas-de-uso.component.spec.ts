import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasDeUsoComponent } from './tarjetas-de-uso.component';

describe('TarjetasDeUsoComponent', () => {
  let component: TarjetasDeUsoComponent;
  let fixture: ComponentFixture<TarjetasDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasDeUsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
