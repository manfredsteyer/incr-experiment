import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component11Component } from './feature80-component11.component';

describe('Feature80Component11Component', () => {
  let component: Feature80Component11Component;
  let fixture: ComponentFixture<Feature80Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
