import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component29Component } from './feature9-component29.component';

describe('Feature9Component29Component', () => {
  let component: Feature9Component29Component;
  let fixture: ComponentFixture<Feature9Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
