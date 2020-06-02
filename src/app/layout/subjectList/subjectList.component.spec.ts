import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectListComponent } from './subjectList.component';
import { SubjectListModule } from './subjectList.module';

describe('SubjectListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        SubjectListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SubjectListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
