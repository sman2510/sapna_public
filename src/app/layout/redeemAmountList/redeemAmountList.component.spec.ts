import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedeemAmountListComponent } from './redeemAmountList.component';
import { RedeemAmountListModule } from './redeemAmountList.module';

describe('RedeemAmountListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        RedeemAmountListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(RedeemAmountListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
