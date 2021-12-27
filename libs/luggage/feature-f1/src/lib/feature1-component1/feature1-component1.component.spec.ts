import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component1Component } from './feature1-component1.component';

describe('Feature1Component1Component', () => {
  let component: Feature1Component1Component;
  let fixture: ComponentFixture<Feature1Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
