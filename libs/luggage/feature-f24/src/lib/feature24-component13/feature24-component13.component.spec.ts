import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component13Component } from './feature24-component13.component';

describe('Feature24Component13Component', () => {
  let component: Feature24Component13Component;
  let fixture: ComponentFixture<Feature24Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
