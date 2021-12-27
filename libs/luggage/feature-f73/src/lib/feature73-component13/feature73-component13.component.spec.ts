import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component13Component } from './feature73-component13.component';

describe('Feature73Component13Component', () => {
  let component: Feature73Component13Component;
  let fixture: ComponentFixture<Feature73Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
