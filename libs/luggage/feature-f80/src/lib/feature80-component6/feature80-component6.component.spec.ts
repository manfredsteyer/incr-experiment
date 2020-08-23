import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component6Component } from './feature80-component6.component';

describe('Feature80Component6Component', () => {
  let component: Feature80Component6Component;
  let fixture: ComponentFixture<Feature80Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
