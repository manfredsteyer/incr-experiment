import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component3Component } from './feature80-component3.component';

describe('Feature80Component3Component', () => {
  let component: Feature80Component3Component;
  let fixture: ComponentFixture<Feature80Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
