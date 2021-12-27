import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component21Component } from './feature9-component21.component';

describe('Feature9Component21Component', () => {
  let component: Feature9Component21Component;
  let fixture: ComponentFixture<Feature9Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
