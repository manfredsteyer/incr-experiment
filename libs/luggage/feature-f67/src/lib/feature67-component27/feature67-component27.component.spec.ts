import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component27Component } from './feature67-component27.component';

describe('Feature67Component27Component', () => {
  let component: Feature67Component27Component;
  let fixture: ComponentFixture<Feature67Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature67Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
