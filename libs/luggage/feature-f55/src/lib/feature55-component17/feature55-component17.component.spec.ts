import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component17Component } from './feature55-component17.component';

describe('Feature55Component17Component', () => {
  let component: Feature55Component17Component;
  let fixture: ComponentFixture<Feature55Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
