import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component1Component } from './feature13-component1.component';

describe('Feature13Component1Component', () => {
  let component: Feature13Component1Component;
  let fixture: ComponentFixture<Feature13Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
