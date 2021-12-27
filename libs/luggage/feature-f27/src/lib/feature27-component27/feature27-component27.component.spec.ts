import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component27Component } from './feature27-component27.component';

describe('Feature27Component27Component', () => {
  let component: Feature27Component27Component;
  let fixture: ComponentFixture<Feature27Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
