import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component17Component } from './feature80-component17.component';

describe('Feature80Component17Component', () => {
  let component: Feature80Component17Component;
  let fixture: ComponentFixture<Feature80Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
