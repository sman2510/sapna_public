import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssessmentViewComponent } from './assessmentView.component';
import { AssessmentViewModule } from './assessmentView.module';

describe('AssessmentViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        AssessmentViewModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(AssessmentViewComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
