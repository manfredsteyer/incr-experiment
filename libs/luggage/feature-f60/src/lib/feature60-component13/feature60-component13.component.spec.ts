import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component13Component } from './feature60-component13.component';

describe('Feature60Component13Component', () => {
  let component: Feature60Component13Component;
  let fixture: ComponentFixture<Feature60Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
