import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component27Component } from './feature20-component27.component';

describe('Feature20Component27Component', () => {
  let component: Feature20Component27Component;
  let fixture: ComponentFixture<Feature20Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
