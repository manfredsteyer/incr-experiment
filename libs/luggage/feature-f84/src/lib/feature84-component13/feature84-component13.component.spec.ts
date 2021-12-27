import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component13Component } from './feature84-component13.component';

describe('Feature84Component13Component', () => {
  let component: Feature84Component13Component;
  let fixture: ComponentFixture<Feature84Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
