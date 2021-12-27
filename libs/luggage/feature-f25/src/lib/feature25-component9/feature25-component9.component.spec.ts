import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component9Component } from './feature25-component9.component';

describe('Feature25Component9Component', () => {
  let component: Feature25Component9Component;
  let fixture: ComponentFixture<Feature25Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
