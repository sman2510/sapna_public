import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssessmentComponent } from './assessment.component';
import { AssessmentModule } from './assessment.module';

describe('AssessmentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        AssessmentModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AssessmentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
