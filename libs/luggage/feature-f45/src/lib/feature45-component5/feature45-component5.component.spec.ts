import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component5Component } from './feature45-component5.component';

describe('Feature45Component5Component', () => {
  let component: Feature45Component5Component;
  let fixture: ComponentFixture<Feature45Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
