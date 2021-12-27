import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component7Component } from './feature80-component7.component';

describe('Feature80Component7Component', () => {
  let component: Feature80Component7Component;
  let fixture: ComponentFixture<Feature80Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
