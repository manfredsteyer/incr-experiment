import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component27Component } from './feature55-component27.component';

describe('Feature55Component27Component', () => {
  let component: Feature55Component27Component;
  let fixture: ComponentFixture<Feature55Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
