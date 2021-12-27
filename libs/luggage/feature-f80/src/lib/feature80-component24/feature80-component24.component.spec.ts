import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component24Component } from './feature80-component24.component';

describe('Feature80Component24Component', () => {
  let component: Feature80Component24Component;
  let fixture: ComponentFixture<Feature80Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
