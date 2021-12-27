import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component27Component } from './feature10-component27.component';

describe('Feature10Component27Component', () => {
  let component: Feature10Component27Component;
  let fixture: ComponentFixture<Feature10Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
