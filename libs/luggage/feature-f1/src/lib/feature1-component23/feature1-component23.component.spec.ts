import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component23Component } from './feature1-component23.component';

describe('Feature1Component23Component', () => {
  let component: Feature1Component23Component;
  let fixture: ComponentFixture<Feature1Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
