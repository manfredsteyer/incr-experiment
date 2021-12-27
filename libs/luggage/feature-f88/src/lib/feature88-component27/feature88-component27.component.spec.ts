import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component27Component } from './feature88-component27.component';

describe('Feature88Component27Component', () => {
  let component: Feature88Component27Component;
  let fixture: ComponentFixture<Feature88Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
