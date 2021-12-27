import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component27Component } from './feature9-component27.component';

describe('Feature9Component27Component', () => {
  let component: Feature9Component27Component;
  let fixture: ComponentFixture<Feature9Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
