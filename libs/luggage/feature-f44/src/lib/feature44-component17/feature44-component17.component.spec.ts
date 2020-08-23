import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component17Component } from './feature44-component17.component';

describe('Feature44Component17Component', () => {
  let component: Feature44Component17Component;
  let fixture: ComponentFixture<Feature44Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
