import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component14Component } from './feature80-component14.component';

describe('Feature80Component14Component', () => {
  let component: Feature80Component14Component;
  let fixture: ComponentFixture<Feature80Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
