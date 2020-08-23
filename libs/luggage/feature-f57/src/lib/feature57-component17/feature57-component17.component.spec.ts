import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component17Component } from './feature57-component17.component';

describe('Feature57Component17Component', () => {
  let component: Feature57Component17Component;
  let fixture: ComponentFixture<Feature57Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
