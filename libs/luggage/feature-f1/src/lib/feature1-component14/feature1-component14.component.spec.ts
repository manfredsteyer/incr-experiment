import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component14Component } from './feature1-component14.component';

describe('Feature1Component14Component', () => {
  let component: Feature1Component14Component;
  let fixture: ComponentFixture<Feature1Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
