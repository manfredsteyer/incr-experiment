import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component27Component } from './feature83-component27.component';

describe('Feature83Component27Component', () => {
  let component: Feature83Component27Component;
  let fixture: ComponentFixture<Feature83Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
