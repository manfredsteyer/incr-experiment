import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component13Component } from './feature36-component13.component';

describe('Feature36Component13Component', () => {
  let component: Feature36Component13Component;
  let fixture: ComponentFixture<Feature36Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
