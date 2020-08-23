import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component17Component } from './feature1-component17.component';

describe('Feature1Component17Component', () => {
  let component: Feature1Component17Component;
  let fixture: ComponentFixture<Feature1Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
