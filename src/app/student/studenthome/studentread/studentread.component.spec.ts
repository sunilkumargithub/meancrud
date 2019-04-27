import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreadComponent } from './studentread.component';

describe('StudentreadComponent', () => {
  let component: StudentreadComponent;
  let fixture: ComponentFixture<StudentreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
