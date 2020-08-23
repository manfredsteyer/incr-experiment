import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component17Component } from './feature85-component17.component';

describe('Feature85Component17Component', () => {
  let component: Feature85Component17Component;
  let fixture: ComponentFixture<Feature85Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
