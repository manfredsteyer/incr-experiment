import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component27Component } from './feature36-component27.component';

describe('Feature36Component27Component', () => {
  let component: Feature36Component27Component;
  let fixture: ComponentFixture<Feature36Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
