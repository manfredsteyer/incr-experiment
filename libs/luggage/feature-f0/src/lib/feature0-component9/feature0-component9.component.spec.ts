import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component9Component } from './feature0-component9.component';

describe('Feature0Component9Component', () => {
  let component: Feature0Component9Component;
  let fixture: ComponentFixture<Feature0Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
