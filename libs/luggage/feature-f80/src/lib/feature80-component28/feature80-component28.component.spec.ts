import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component28Component } from './feature80-component28.component';

describe('Feature80Component28Component', () => {
  let component: Feature80Component28Component;
  let fixture: ComponentFixture<Feature80Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
