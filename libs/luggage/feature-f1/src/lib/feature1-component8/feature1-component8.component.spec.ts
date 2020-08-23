import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component8Component } from './feature1-component8.component';

describe('Feature1Component8Component', () => {
  let component: Feature1Component8Component;
  let fixture: ComponentFixture<Feature1Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
