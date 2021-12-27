import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component0Component } from './feature1-component0.component';

describe('Feature1Component0Component', () => {
  let component: Feature1Component0Component;
  let fixture: ComponentFixture<Feature1Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
