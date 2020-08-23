import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component18Component } from './feature9-component18.component';

describe('Feature9Component18Component', () => {
  let component: Feature9Component18Component;
  let fixture: ComponentFixture<Feature9Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
