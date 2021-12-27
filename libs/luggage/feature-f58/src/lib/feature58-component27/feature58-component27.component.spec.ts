import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component27Component } from './feature58-component27.component';

describe('Feature58Component27Component', () => {
  let component: Feature58Component27Component;
  let fixture: ComponentFixture<Feature58Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
