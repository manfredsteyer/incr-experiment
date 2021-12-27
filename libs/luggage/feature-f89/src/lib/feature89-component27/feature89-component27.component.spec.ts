import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component27Component } from './feature89-component27.component';

describe('Feature89Component27Component', () => {
  let component: Feature89Component27Component;
  let fixture: ComponentFixture<Feature89Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
