import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component17Component } from './feature78-component17.component';

describe('Feature78Component17Component', () => {
  let component: Feature78Component17Component;
  let fixture: ComponentFixture<Feature78Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
