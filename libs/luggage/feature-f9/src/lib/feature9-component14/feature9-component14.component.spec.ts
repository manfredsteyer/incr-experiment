import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component14Component } from './feature9-component14.component';

describe('Feature9Component14Component', () => {
  let component: Feature9Component14Component;
  let fixture: ComponentFixture<Feature9Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
