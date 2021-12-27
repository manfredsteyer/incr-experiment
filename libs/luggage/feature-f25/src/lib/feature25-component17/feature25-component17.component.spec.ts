import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component17Component } from './feature25-component17.component';

describe('Feature25Component17Component', () => {
  let component: Feature25Component17Component;
  let fixture: ComponentFixture<Feature25Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
