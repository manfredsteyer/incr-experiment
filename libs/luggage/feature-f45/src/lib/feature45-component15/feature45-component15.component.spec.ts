import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component15Component } from './feature45-component15.component';

describe('Feature45Component15Component', () => {
  let component: Feature45Component15Component;
  let fixture: ComponentFixture<Feature45Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
