import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component29Component } from './feature80-component29.component';

describe('Feature80Component29Component', () => {
  let component: Feature80Component29Component;
  let fixture: ComponentFixture<Feature80Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
