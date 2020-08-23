import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component24Component } from './feature45-component24.component';

describe('Feature45Component24Component', () => {
  let component: Feature45Component24Component;
  let fixture: ComponentFixture<Feature45Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
