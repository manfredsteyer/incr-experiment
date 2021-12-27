import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component21Component } from './feature1-component21.component';

describe('Feature1Component21Component', () => {
  let component: Feature1Component21Component;
  let fixture: ComponentFixture<Feature1Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
