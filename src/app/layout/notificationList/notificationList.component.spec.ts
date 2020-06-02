import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationListComponent } from './notificationList.component';
import { NotificationListModule } from './notificationList.module';

describe('NotificationListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        NotificationListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(NotificationListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
