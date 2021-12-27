import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component15Component } from './feature9-component15.component';

describe('Feature9Component15Component', () => {
  let component: Feature9Component15Component;
  let fixture: ComponentFixture<Feature9Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
