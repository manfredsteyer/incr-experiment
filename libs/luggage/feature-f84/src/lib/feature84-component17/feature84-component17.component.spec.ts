import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component17Component } from './feature84-component17.component';

describe('Feature84Component17Component', () => {
  let component: Feature84Component17Component;
  let fixture: ComponentFixture<Feature84Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
