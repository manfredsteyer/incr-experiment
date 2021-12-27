import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component27Component } from './feature81-component27.component';

describe('Feature81Component27Component', () => {
  let component: Feature81Component27Component;
  let fixture: ComponentFixture<Feature81Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
