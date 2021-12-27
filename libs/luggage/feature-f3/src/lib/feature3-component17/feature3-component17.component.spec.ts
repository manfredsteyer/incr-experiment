import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component17Component } from './feature3-component17.component';

describe('Feature3Component17Component', () => {
  let component: Feature3Component17Component;
  let fixture: ComponentFixture<Feature3Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
