import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component24Component } from './feature17-component24.component';

describe('Feature17Component24Component', () => {
  let component: Feature17Component24Component;
  let fixture: ComponentFixture<Feature17Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
