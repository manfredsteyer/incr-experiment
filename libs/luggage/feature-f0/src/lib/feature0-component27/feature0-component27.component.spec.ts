import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component27Component } from './feature0-component27.component';

describe('Feature0Component27Component', () => {
  let component: Feature0Component27Component;
  let fixture: ComponentFixture<Feature0Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
