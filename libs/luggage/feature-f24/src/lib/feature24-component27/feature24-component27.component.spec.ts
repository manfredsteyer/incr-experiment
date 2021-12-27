import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component27Component } from './feature24-component27.component';

describe('Feature24Component27Component', () => {
  let component: Feature24Component27Component;
  let fixture: ComponentFixture<Feature24Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
