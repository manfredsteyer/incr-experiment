import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component17Component } from './feature21-component17.component';

describe('Feature21Component17Component', () => {
  let component: Feature21Component17Component;
  let fixture: ComponentFixture<Feature21Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
