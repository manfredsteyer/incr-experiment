import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component28Component } from './feature9-component28.component';

describe('Feature9Component28Component', () => {
  let component: Feature9Component28Component;
  let fixture: ComponentFixture<Feature9Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
