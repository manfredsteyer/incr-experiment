import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component27Component } from './feature32-component27.component';

describe('Feature32Component27Component', () => {
  let component: Feature32Component27Component;
  let fixture: ComponentFixture<Feature32Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
