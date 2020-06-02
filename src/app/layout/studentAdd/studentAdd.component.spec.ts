import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentAddComponent } from './studentAdd.component';
import { StudentAddModule } from './studentAdd.module';

describe('StudentAddComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        StudentAddModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(StudentAddComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
