import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component14Component } from './feature13-component14.component';

describe('Feature13Component14Component', () => {
  let component: Feature13Component14Component;
  let fixture: ComponentFixture<Feature13Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
