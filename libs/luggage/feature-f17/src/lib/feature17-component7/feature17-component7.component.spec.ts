import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component7Component } from './feature17-component7.component';

describe('Feature17Component7Component', () => {
  let component: Feature17Component7Component;
  let fixture: ComponentFixture<Feature17Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
