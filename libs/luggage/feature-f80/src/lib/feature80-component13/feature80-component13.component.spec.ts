import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component13Component } from './feature80-component13.component';

describe('Feature80Component13Component', () => {
  let component: Feature80Component13Component;
  let fixture: ComponentFixture<Feature80Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
