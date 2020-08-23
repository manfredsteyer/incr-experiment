import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component27Component } from './feature25-component27.component';

describe('Feature25Component27Component', () => {
  let component: Feature25Component27Component;
  let fixture: ComponentFixture<Feature25Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
