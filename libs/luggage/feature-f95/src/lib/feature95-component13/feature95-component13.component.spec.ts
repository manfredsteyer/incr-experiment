import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component13Component } from './feature95-component13.component';

describe('Feature95Component13Component', () => {
  let component: Feature95Component13Component;
  let fixture: ComponentFixture<Feature95Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
