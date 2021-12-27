import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component9Component } from './feature13-component9.component';

describe('Feature13Component9Component', () => {
  let component: Feature13Component9Component;
  let fixture: ComponentFixture<Feature13Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
