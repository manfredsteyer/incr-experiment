import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component13Component } from './feature2-component13.component';

describe('Feature2Component13Component', () => {
  let component: Feature2Component13Component;
  let fixture: ComponentFixture<Feature2Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
