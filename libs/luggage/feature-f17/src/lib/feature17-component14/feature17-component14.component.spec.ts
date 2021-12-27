import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component14Component } from './feature17-component14.component';

describe('Feature17Component14Component', () => {
  let component: Feature17Component14Component;
  let fixture: ComponentFixture<Feature17Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
