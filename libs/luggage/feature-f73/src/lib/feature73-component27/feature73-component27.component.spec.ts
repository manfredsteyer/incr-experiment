import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component27Component } from './feature73-component27.component';

describe('Feature73Component27Component', () => {
  let component: Feature73Component27Component;
  let fixture: ComponentFixture<Feature73Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
