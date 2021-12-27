import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component13Component } from './feature21-component13.component';

describe('Feature21Component13Component', () => {
  let component: Feature21Component13Component;
  let fixture: ComponentFixture<Feature21Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
