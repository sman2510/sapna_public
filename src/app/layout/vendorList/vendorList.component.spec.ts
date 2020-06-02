import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorListComponent } from './vendorList.component';
import { VendorListModule } from './vendorList.module';

describe('VendorListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        VendorListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(VendorListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
