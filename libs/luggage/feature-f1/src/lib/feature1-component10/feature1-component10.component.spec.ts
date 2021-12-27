import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component10Component } from './feature1-component10.component';

describe('Feature1Component10Component', () => {
  let component: Feature1Component10Component;
  let fixture: ComponentFixture<Feature1Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature1Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
