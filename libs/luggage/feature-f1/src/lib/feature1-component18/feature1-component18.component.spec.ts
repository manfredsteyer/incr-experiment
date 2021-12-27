import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component18Component } from './feature1-component18.component';

describe('Feature1Component18Component', () => {
  let component: Feature1Component18Component;
  let fixture: ComponentFixture<Feature1Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
