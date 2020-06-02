import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionListComponent } from './subscriptionList.component';
import { SubscriptionListModule } from './subscriptionList.module';

describe('SubscriptionListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        SubscriptionListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SubscriptionListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
