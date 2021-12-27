import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component20Component } from './feature80-component20.component';

describe('Feature80Component20Component', () => {
  let component: Feature80Component20Component;
  let fixture: ComponentFixture<Feature80Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
