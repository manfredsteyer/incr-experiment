import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component27Component } from './feature45-component27.component';

describe('Feature45Component27Component', () => {
  let component: Feature45Component27Component;
  let fixture: ComponentFixture<Feature45Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
