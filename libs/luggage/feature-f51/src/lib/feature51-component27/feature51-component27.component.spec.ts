import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component27Component } from './feature51-component27.component';

describe('Feature51Component27Component', () => {
  let component: Feature51Component27Component;
  let fixture: ComponentFixture<Feature51Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
