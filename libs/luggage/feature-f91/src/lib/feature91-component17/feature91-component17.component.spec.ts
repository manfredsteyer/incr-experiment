import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component17Component } from './feature91-component17.component';

describe('Feature91Component17Component', () => {
  let component: Feature91Component17Component;
  let fixture: ComponentFixture<Feature91Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
