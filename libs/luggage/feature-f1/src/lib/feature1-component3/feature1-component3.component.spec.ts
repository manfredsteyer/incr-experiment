import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component3Component } from './feature1-component3.component';

describe('Feature1Component3Component', () => {
  let component: Feature1Component3Component;
  let fixture: ComponentFixture<Feature1Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
