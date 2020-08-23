import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component13Component } from './feature17-component13.component';

describe('Feature17Component13Component', () => {
  let component: Feature17Component13Component;
  let fixture: ComponentFixture<Feature17Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
