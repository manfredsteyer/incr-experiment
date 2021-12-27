import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component13Component } from './feature51-component13.component';

describe('Feature51Component13Component', () => {
  let component: Feature51Component13Component;
  let fixture: ComponentFixture<Feature51Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
