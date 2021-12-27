import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component13Component } from './feature43-component13.component';

describe('Feature43Component13Component', () => {
  let component: Feature43Component13Component;
  let fixture: ComponentFixture<Feature43Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
