import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component27Component } from './feature43-component27.component';

describe('Feature43Component27Component', () => {
  let component: Feature43Component27Component;
  let fixture: ComponentFixture<Feature43Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
