import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component27Component } from './feature23-component27.component';

describe('Feature23Component27Component', () => {
  let component: Feature23Component27Component;
  let fixture: ComponentFixture<Feature23Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
