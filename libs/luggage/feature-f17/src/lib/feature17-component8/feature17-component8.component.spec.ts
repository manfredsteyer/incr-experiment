import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component8Component } from './feature17-component8.component';

describe('Feature17Component8Component', () => {
  let component: Feature17Component8Component;
  let fixture: ComponentFixture<Feature17Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
