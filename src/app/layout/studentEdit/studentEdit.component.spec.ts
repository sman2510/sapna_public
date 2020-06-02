import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './studentEdit.component';
import { StudentEditModule } from './studentEdit.module';

describe('StudentEditComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        StudentEditModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentEditComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
