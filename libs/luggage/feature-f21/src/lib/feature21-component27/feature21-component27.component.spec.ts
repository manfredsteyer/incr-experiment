import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component27Component } from './feature21-component27.component';

describe('Feature21Component27Component', () => {
  let component: Feature21Component27Component;
  let fixture: ComponentFixture<Feature21Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
