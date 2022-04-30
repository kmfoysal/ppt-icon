import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTodayComponent } from './buy-today.component';

describe('BuyTodayComponent', () => {
  let component: BuyTodayComponent;
  let fixture: ComponentFixture<BuyTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
