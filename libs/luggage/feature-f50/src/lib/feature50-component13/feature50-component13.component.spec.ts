import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component13Component } from './feature50-component13.component';

describe('Feature50Component13Component', () => {
  let component: Feature50Component13Component;
  let fixture: ComponentFixture<Feature50Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
