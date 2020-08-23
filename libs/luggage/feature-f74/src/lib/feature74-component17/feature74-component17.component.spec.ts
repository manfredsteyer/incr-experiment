import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component17Component } from './feature74-component17.component';

describe('Feature74Component17Component', () => {
  let component: Feature74Component17Component;
  let fixture: ComponentFixture<Feature74Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
