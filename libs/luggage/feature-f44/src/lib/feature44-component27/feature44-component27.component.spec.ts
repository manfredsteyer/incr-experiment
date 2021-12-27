import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component27Component } from './feature44-component27.component';

describe('Feature44Component27Component', () => {
  let component: Feature44Component27Component;
  let fixture: ComponentFixture<Feature44Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
