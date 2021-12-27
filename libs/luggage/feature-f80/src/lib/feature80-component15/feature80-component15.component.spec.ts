import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component15Component } from './feature80-component15.component';

describe('Feature80Component15Component', () => {
  let component: Feature80Component15Component;
  let fixture: ComponentFixture<Feature80Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
