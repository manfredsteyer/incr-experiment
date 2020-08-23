import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component17Component } from './feature51-component17.component';

describe('Feature51Component17Component', () => {
  let component: Feature51Component17Component;
  let fixture: ComponentFixture<Feature51Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
