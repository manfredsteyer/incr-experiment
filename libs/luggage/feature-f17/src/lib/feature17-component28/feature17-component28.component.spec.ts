import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component28Component } from './feature17-component28.component';

describe('Feature17Component28Component', () => {
  let component: Feature17Component28Component;
  let fixture: ComponentFixture<Feature17Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
