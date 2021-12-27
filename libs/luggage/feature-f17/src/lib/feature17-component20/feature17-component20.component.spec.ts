import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component20Component } from './feature17-component20.component';

describe('Feature17Component20Component', () => {
  let component: Feature17Component20Component;
  let fixture: ComponentFixture<Feature17Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
