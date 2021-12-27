import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component1Component } from './feature17-component1.component';

describe('Feature17Component1Component', () => {
  let component: Feature17Component1Component;
  let fixture: ComponentFixture<Feature17Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
