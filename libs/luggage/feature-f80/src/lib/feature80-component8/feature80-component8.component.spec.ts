import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component8Component } from './feature80-component8.component';

describe('Feature80Component8Component', () => {
  let component: Feature80Component8Component;
  let fixture: ComponentFixture<Feature80Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
