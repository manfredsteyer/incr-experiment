import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component27Component } from './feature85-component27.component';

describe('Feature85Component27Component', () => {
  let component: Feature85Component27Component;
  let fixture: ComponentFixture<Feature85Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
