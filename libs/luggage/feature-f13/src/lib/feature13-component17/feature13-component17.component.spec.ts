import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component17Component } from './feature13-component17.component';

describe('Feature13Component17Component', () => {
  let component: Feature13Component17Component;
  let fixture: ComponentFixture<Feature13Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
