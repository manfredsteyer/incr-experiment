import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component2Component } from './feature80-component2.component';

describe('Feature80Component2Component', () => {
  let component: Feature80Component2Component;
  let fixture: ComponentFixture<Feature80Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
