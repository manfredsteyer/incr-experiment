import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component9Component } from './feature84-component9.component';

describe('Feature84Component9Component', () => {
  let component: Feature84Component9Component;
  let fixture: ComponentFixture<Feature84Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
