import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component13Component } from './feature1-component13.component';

describe('Feature1Component13Component', () => {
  let component: Feature1Component13Component;
  let fixture: ComponentFixture<Feature1Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
