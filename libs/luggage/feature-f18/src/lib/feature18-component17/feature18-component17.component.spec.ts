import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component17Component } from './feature18-component17.component';

describe('Feature18Component17Component', () => {
  let component: Feature18Component17Component;
  let fixture: ComponentFixture<Feature18Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
