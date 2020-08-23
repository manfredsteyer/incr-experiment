import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component27Component } from './feature76-component27.component';

describe('Feature76Component27Component', () => {
  let component: Feature76Component27Component;
  let fixture: ComponentFixture<Feature76Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
