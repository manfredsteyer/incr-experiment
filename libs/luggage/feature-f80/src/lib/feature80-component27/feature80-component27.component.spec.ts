import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component27Component } from './feature80-component27.component';

describe('Feature80Component27Component', () => {
  let component: Feature80Component27Component;
  let fixture: ComponentFixture<Feature80Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
