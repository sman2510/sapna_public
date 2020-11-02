import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiveClassComponent } from './liveClass.component';
import { LiveClassModule } from './liveClass.module';

describe('LiveClassComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        LiveClassModule, 
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LiveClassComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
