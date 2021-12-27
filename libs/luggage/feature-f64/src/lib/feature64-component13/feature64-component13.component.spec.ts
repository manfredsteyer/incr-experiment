import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component13Component } from './feature64-component13.component';

describe('Feature64Component13Component', () => {
  let component: Feature64Component13Component;
  let fixture: ComponentFixture<Feature64Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
