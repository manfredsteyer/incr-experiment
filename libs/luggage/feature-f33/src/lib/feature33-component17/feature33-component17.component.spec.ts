import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component17Component } from './feature33-component17.component';

describe('Feature33Component17Component', () => {
  let component: Feature33Component17Component;
  let fixture: ComponentFixture<Feature33Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
