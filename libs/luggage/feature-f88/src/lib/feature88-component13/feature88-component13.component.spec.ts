import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component13Component } from './feature88-component13.component';

describe('Feature88Component13Component', () => {
  let component: Feature88Component13Component;
  let fixture: ComponentFixture<Feature88Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
