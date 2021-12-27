import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component13Component } from './feature13-component13.component';

describe('Feature13Component13Component', () => {
  let component: Feature13Component13Component;
  let fixture: ComponentFixture<Feature13Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
