import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component0Component } from './feature9-component0.component';

describe('Feature9Component0Component', () => {
  let component: Feature9Component0Component;
  let fixture: ComponentFixture<Feature9Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
