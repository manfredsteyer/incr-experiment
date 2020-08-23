import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component27Component } from './feature60-component27.component';

describe('Feature60Component27Component', () => {
  let component: Feature60Component27Component;
  let fixture: ComponentFixture<Feature60Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
