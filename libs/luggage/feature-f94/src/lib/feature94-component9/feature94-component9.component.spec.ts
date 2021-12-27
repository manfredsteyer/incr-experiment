import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component9Component } from './feature94-component9.component';

describe('Feature94Component9Component', () => {
  let component: Feature94Component9Component;
  let fixture: ComponentFixture<Feature94Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
