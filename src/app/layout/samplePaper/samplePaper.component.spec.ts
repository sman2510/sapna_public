import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SamplePaperComponent } from './samplePaper.component';
import { SamplePaperModule } from './samplePaper.module';

describe('SamplePaperComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        SamplePaperModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(SamplePaperComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
