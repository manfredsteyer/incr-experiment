import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component1Component } from './feature9-component1.component';

describe('Feature9Component1Component', () => {
  let component: Feature9Component1Component;
  let fixture: ComponentFixture<Feature9Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
