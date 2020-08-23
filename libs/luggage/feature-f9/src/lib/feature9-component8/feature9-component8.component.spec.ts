import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component8Component } from './feature9-component8.component';

describe('Feature9Component8Component', () => {
  let component: Feature9Component8Component;
  let fixture: ComponentFixture<Feature9Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
