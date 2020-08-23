import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component17Component } from './feature15-component17.component';

describe('Feature15Component17Component', () => {
  let component: Feature15Component17Component;
  let fixture: ComponentFixture<Feature15Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
