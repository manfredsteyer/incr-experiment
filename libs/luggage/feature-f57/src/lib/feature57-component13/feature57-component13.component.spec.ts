import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component13Component } from './feature57-component13.component';

describe('Feature57Component13Component', () => {
  let component: Feature57Component13Component;
  let fixture: ComponentFixture<Feature57Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
