import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component9Component } from './feature14-component9.component';

describe('Feature14Component9Component', () => {
  let component: Feature14Component9Component;
  let fixture: ComponentFixture<Feature14Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
