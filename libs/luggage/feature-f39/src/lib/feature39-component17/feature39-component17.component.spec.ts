import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component17Component } from './feature39-component17.component';

describe('Feature39Component17Component', () => {
  let component: Feature39Component17Component;
  let fixture: ComponentFixture<Feature39Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
