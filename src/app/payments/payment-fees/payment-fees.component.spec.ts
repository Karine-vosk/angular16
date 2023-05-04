import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFeesComponent } from './payment-fees.component';

describe('PaymentFeesComponent', () => {
  let component: PaymentFeesComponent;
  let fixture: ComponentFixture<PaymentFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PaymentFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
