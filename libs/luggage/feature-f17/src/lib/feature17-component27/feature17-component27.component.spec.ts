import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component27Component } from './feature17-component27.component';

describe('Feature17Component27Component', () => {
  let component: Feature17Component27Component;
  let fixture: ComponentFixture<Feature17Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
