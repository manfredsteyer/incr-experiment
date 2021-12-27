import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component17Component } from './feature32-component17.component';

describe('Feature32Component17Component', () => {
  let component: Feature32Component17Component;
  let fixture: ComponentFixture<Feature32Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
