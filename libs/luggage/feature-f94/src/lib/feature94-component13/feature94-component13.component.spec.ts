import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component13Component } from './feature94-component13.component';

describe('Feature94Component13Component', () => {
  let component: Feature94Component13Component;
  let fixture: ComponentFixture<Feature94Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
