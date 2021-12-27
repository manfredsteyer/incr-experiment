import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component27Component } from './feature64-component27.component';

describe('Feature64Component27Component', () => {
  let component: Feature64Component27Component;
  let fixture: ComponentFixture<Feature64Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
