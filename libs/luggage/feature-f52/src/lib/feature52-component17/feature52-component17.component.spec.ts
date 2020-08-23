import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component17Component } from './feature52-component17.component';

describe('Feature52Component17Component', () => {
  let component: Feature52Component17Component;
  let fixture: ComponentFixture<Feature52Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
