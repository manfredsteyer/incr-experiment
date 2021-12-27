import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component9Component } from './feature10-component9.component';

describe('Feature10Component9Component', () => {
  let component: Feature10Component9Component;
  let fixture: ComponentFixture<Feature10Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
