import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './orderList.component';
import { OrderListModule } from './orderList.module';

describe('OrderListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        OrderListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(OrderListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
