import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component13Component } from './feature77-component13.component';

describe('Feature77Component13Component', () => {
  let component: Feature77Component13Component;
  let fixture: ComponentFixture<Feature77Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
