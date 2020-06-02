import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportListComponent } from './reportList.component';
import { ReportListModule } from './reportList.module';

describe('ReportListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ReportListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ReportListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
