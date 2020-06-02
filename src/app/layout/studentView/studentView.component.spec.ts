import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentViewComponent } from './studentView.component';
import { StudentViewModule } from './studentView.module';

describe('StudentViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        StudentViewModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentViewComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
