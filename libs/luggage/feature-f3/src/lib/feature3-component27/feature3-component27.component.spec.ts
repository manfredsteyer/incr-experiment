import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component27Component } from './feature3-component27.component';

describe('Feature3Component27Component', () => {
  let component: Feature3Component27Component;
  let fixture: ComponentFixture<Feature3Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
