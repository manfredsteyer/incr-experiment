import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component17Component } from './feature38-component17.component';

describe('Feature38Component17Component', () => {
  let component: Feature38Component17Component;
  let fixture: ComponentFixture<Feature38Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
