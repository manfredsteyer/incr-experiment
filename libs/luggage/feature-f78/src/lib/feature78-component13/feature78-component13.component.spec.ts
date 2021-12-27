import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component13Component } from './feature78-component13.component';

describe('Feature78Component13Component', () => {
  let component: Feature78Component13Component;
  let fixture: ComponentFixture<Feature78Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
