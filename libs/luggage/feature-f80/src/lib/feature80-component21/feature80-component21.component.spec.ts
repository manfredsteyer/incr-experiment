import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component21Component } from './feature80-component21.component';

describe('Feature80Component21Component', () => {
  let component: Feature80Component21Component;
  let fixture: ComponentFixture<Feature80Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
