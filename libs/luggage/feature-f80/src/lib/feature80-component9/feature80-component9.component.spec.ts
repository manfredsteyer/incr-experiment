import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component9Component } from './feature80-component9.component';

describe('Feature80Component9Component', () => {
  let component: Feature80Component9Component;
  let fixture: ComponentFixture<Feature80Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
