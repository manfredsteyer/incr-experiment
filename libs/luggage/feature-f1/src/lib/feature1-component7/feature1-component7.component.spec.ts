import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component7Component } from './feature1-component7.component';

describe('Feature1Component7Component', () => {
  let component: Feature1Component7Component;
  let fixture: ComponentFixture<Feature1Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
