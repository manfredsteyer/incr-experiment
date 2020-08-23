import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component23Component } from './feature80-component23.component';

describe('Feature80Component23Component', () => {
  let component: Feature80Component23Component;
  let fixture: ComponentFixture<Feature80Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
