import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component23Component } from './feature9-component23.component';

describe('Feature9Component23Component', () => {
  let component: Feature9Component23Component;
  let fixture: ComponentFixture<Feature9Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
