import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component17Component } from './feature9-component17.component';

describe('Feature9Component17Component', () => {
  let component: Feature9Component17Component;
  let fixture: ComponentFixture<Feature9Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
