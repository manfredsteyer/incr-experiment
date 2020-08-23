import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component27Component } from './feature77-component27.component';

describe('Feature77Component27Component', () => {
  let component: Feature77Component27Component;
  let fixture: ComponentFixture<Feature77Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
