import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component17Component } from './feature11-component17.component';

describe('Feature11Component17Component', () => {
  let component: Feature11Component17Component;
  let fixture: ComponentFixture<Feature11Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
