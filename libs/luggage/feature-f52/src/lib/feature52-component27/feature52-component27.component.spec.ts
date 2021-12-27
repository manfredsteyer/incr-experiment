import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component27Component } from './feature52-component27.component';

describe('Feature52Component27Component', () => {
  let component: Feature52Component27Component;
  let fixture: ComponentFixture<Feature52Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
