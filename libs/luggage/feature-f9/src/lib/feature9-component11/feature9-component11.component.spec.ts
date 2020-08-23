import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component11Component } from './feature9-component11.component';

describe('Feature9Component11Component', () => {
  let component: Feature9Component11Component;
  let fixture: ComponentFixture<Feature9Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
