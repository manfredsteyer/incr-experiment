import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component13Component } from './feature39-component13.component';

describe('Feature39Component13Component', () => {
  let component: Feature39Component13Component;
  let fixture: ComponentFixture<Feature39Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
