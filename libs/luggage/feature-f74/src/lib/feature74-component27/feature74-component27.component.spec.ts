import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component27Component } from './feature74-component27.component';

describe('Feature74Component27Component', () => {
  let component: Feature74Component27Component;
  let fixture: ComponentFixture<Feature74Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
