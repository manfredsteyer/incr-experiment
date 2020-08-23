import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component17Component } from './feature36-component17.component';

describe('Feature36Component17Component', () => {
  let component: Feature36Component17Component;
  let fixture: ComponentFixture<Feature36Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
