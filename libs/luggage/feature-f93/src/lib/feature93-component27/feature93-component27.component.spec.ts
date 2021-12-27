import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component27Component } from './feature93-component27.component';

describe('Feature93Component27Component', () => {
  let component: Feature93Component27Component;
  let fixture: ComponentFixture<Feature93Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
