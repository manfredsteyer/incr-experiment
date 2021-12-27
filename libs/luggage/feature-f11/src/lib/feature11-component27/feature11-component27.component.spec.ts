import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component27Component } from './feature11-component27.component';

describe('Feature11Component27Component', () => {
  let component: Feature11Component27Component;
  let fixture: ComponentFixture<Feature11Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
