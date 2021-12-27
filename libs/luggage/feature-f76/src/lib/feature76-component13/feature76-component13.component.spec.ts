import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component13Component } from './feature76-component13.component';

describe('Feature76Component13Component', () => {
  let component: Feature76Component13Component;
  let fixture: ComponentFixture<Feature76Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
