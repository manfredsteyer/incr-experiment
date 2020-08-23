import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component17Component } from './feature77-component17.component';

describe('Feature77Component17Component', () => {
  let component: Feature77Component17Component;
  let fixture: ComponentFixture<Feature77Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
