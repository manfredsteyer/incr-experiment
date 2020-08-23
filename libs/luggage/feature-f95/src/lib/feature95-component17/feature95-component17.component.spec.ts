import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component17Component } from './feature95-component17.component';

describe('Feature95Component17Component', () => {
  let component: Feature95Component17Component;
  let fixture: ComponentFixture<Feature95Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
