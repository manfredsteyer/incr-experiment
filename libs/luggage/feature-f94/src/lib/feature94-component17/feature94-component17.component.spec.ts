import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component17Component } from './feature94-component17.component';

describe('Feature94Component17Component', () => {
  let component: Feature94Component17Component;
  let fixture: ComponentFixture<Feature94Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
