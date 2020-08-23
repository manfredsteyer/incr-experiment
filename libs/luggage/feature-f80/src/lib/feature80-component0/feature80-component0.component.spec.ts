import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component0Component } from './feature80-component0.component';

describe('Feature80Component0Component', () => {
  let component: Feature80Component0Component;
  let fixture: ComponentFixture<Feature80Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
