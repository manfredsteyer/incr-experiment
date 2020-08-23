import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component24Component } from './feature1-component24.component';

describe('Feature1Component24Component', () => {
  let component: Feature1Component24Component;
  let fixture: ComponentFixture<Feature1Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
