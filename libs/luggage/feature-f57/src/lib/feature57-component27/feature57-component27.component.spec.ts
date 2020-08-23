import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component27Component } from './feature57-component27.component';

describe('Feature57Component27Component', () => {
  let component: Feature57Component27Component;
  let fixture: ComponentFixture<Feature57Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
