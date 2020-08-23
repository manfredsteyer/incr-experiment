import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component17Component } from './feature64-component17.component';

describe('Feature64Component17Component', () => {
  let component: Feature64Component17Component;
  let fixture: ComponentFixture<Feature64Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
