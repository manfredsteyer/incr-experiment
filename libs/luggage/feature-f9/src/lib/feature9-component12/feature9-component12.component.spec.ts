import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component12Component } from './feature9-component12.component';

describe('Feature9Component12Component', () => {
  let component: Feature9Component12Component;
  let fixture: ComponentFixture<Feature9Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
