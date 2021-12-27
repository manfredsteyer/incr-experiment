import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component27Component } from './feature72-component27.component';

describe('Feature72Component27Component', () => {
  let component: Feature72Component27Component;
  let fixture: ComponentFixture<Feature72Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
