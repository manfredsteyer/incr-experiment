import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component9Component } from './feature2-component9.component';

describe('Feature2Component9Component', () => {
  let component: Feature2Component9Component;
  let fixture: ComponentFixture<Feature2Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
