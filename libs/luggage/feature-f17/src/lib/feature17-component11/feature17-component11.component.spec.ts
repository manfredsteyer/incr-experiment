import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component11Component } from './feature17-component11.component';

describe('Feature17Component11Component', () => {
  let component: Feature17Component11Component;
  let fixture: ComponentFixture<Feature17Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
