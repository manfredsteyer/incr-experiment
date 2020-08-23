import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component13Component } from './feature18-component13.component';

describe('Feature18Component13Component', () => {
  let component: Feature18Component13Component;
  let fixture: ComponentFixture<Feature18Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
