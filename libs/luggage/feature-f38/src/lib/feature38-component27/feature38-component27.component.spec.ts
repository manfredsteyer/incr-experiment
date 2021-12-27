import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component27Component } from './feature38-component27.component';

describe('Feature38Component27Component', () => {
  let component: Feature38Component27Component;
  let fixture: ComponentFixture<Feature38Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
