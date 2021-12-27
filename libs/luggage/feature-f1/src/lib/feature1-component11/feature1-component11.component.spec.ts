import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component11Component } from './feature1-component11.component';

describe('Feature1Component11Component', () => {
  let component: Feature1Component11Component;
  let fixture: ComponentFixture<Feature1Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
