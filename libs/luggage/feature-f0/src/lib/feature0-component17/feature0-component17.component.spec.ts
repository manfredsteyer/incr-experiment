import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component17Component } from './feature0-component17.component';

describe('Feature0Component17Component', () => {
  let component: Feature0Component17Component;
  let fixture: ComponentFixture<Feature0Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
