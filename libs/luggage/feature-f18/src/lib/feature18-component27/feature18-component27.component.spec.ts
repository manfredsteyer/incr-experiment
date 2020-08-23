import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component27Component } from './feature18-component27.component';

describe('Feature18Component27Component', () => {
  let component: Feature18Component27Component;
  let fixture: ComponentFixture<Feature18Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
