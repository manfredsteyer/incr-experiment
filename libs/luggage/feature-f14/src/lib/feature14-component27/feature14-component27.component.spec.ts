import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component27Component } from './feature14-component27.component';

describe('Feature14Component27Component', () => {
  let component: Feature14Component27Component;
  let fixture: ComponentFixture<Feature14Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
