import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component7Component } from './feature9-component7.component';

describe('Feature9Component7Component', () => {
  let component: Feature9Component7Component;
  let fixture: ComponentFixture<Feature9Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
