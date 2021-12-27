import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component27Component } from './feature39-component27.component';

describe('Feature39Component27Component', () => {
  let component: Feature39Component27Component;
  let fixture: ComponentFixture<Feature39Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
