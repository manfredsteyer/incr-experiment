import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component7Component } from './feature45-component7.component';

describe('Feature45Component7Component', () => {
  let component: Feature45Component7Component;
  let fixture: ComponentFixture<Feature45Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
