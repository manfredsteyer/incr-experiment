import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component9Component } from './feature93-component9.component';

describe('Feature93Component9Component', () => {
  let component: Feature93Component9Component;
  let fixture: ComponentFixture<Feature93Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
