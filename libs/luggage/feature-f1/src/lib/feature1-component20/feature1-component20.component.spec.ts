import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component20Component } from './feature1-component20.component';

describe('Feature1Component20Component', () => {
  let component: Feature1Component20Component;
  let fixture: ComponentFixture<Feature1Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
