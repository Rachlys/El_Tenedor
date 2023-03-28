import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumsComponent } from './yums.component';

describe('YumsComponent', () => {
  let component: YumsComponent;
  let fixture: ComponentFixture<YumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
