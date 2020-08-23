import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component27Component } from './feature95-component27.component';

describe('Feature95Component27Component', () => {
  let component: Feature95Component27Component;
  let fixture: ComponentFixture<Feature95Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
