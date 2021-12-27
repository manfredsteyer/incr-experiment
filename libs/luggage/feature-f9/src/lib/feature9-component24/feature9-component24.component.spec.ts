import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component24Component } from './feature9-component24.component';

describe('Feature9Component24Component', () => {
  let component: Feature9Component24Component;
  let fixture: ComponentFixture<Feature9Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
