import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component9Component } from './feature64-component9.component';

describe('Feature64Component9Component', () => {
  let component: Feature64Component9Component;
  let fixture: ComponentFixture<Feature64Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
