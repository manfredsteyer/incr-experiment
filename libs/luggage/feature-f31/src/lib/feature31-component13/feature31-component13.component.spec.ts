import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component13Component } from './feature31-component13.component';

describe('Feature31Component13Component', () => {
  let component: Feature31Component13Component;
  let fixture: ComponentFixture<Feature31Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
