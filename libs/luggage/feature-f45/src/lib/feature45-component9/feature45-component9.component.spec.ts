import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component9Component } from './feature45-component9.component';

describe('Feature45Component9Component', () => {
  let component: Feature45Component9Component;
  let fixture: ComponentFixture<Feature45Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
