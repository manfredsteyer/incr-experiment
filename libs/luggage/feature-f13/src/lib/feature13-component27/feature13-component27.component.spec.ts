import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component27Component } from './feature13-component27.component';

describe('Feature13Component27Component', () => {
  let component: Feature13Component27Component;
  let fixture: ComponentFixture<Feature13Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
