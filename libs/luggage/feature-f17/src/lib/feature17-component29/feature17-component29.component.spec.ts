import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component29Component } from './feature17-component29.component';

describe('Feature17Component29Component', () => {
  let component: Feature17Component29Component;
  let fixture: ComponentFixture<Feature17Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
