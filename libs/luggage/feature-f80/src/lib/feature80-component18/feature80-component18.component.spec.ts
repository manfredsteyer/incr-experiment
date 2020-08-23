import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component18Component } from './feature80-component18.component';

describe('Feature80Component18Component', () => {
  let component: Feature80Component18Component;
  let fixture: ComponentFixture<Feature80Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
