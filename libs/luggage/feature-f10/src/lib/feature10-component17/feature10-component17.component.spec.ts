import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component17Component } from './feature10-component17.component';

describe('Feature10Component17Component', () => {
  let component: Feature10Component17Component;
  let fixture: ComponentFixture<Feature10Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
