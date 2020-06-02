import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChapterListComponent } from './chapterList.component';
import { ChapterListModule } from './chapterList.module';

describe('ChapterListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        ChapterListModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ChapterListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
