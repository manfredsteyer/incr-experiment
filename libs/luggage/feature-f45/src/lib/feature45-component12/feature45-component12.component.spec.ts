import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component12Component } from './feature45-component12.component';

describe('Feature45Component12Component', () => {
  let component: Feature45Component12Component;
  let fixture: ComponentFixture<Feature45Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
