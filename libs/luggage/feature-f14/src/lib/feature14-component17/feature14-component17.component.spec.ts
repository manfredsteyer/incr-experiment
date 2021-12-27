import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component17Component } from './feature14-component17.component';

describe('Feature14Component17Component', () => {
  let component: Feature14Component17Component;
  let fixture: ComponentFixture<Feature14Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
