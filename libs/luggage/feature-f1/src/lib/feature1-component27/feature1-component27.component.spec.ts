import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component27Component } from './feature1-component27.component';

describe('Feature1Component27Component', () => {
  let component: Feature1Component27Component;
  let fixture: ComponentFixture<Feature1Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
