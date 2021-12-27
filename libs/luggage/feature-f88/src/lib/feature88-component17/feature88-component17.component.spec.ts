import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component17Component } from './feature88-component17.component';

describe('Feature88Component17Component', () => {
  let component: Feature88Component17Component;
  let fixture: ComponentFixture<Feature88Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
