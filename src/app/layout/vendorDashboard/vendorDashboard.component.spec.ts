import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorDashboardComponent } from './vendorDashboard.component';
import { VendorDashboardModule } from './vendorDashboard.module';

describe('VendorDashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        VendorDashboardModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(VendorDashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
