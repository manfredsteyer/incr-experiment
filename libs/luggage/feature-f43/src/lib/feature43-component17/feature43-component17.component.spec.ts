import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component17Component } from './feature43-component17.component';

describe('Feature43Component17Component', () => {
  let component: Feature43Component17Component;
  let fixture: ComponentFixture<Feature43Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
