import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component6Component } from './feature9-component6.component';

describe('Feature9Component6Component', () => {
  let component: Feature9Component6Component;
  let fixture: ComponentFixture<Feature9Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
