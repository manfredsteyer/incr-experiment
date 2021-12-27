import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component28Component } from './feature45-component28.component';

describe('Feature45Component28Component', () => {
  let component: Feature45Component28Component;
  let fixture: ComponentFixture<Feature45Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
