import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component1Component } from './feature80-component1.component';

describe('Feature80Component1Component', () => {
  let component: Feature80Component1Component;
  let fixture: ComponentFixture<Feature80Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
