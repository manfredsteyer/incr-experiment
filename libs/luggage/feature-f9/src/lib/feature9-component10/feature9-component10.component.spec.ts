import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component10Component } from './feature9-component10.component';

describe('Feature9Component10Component', () => {
  let component: Feature9Component10Component;
  let fixture: ComponentFixture<Feature9Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
