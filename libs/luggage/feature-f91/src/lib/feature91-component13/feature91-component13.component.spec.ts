import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component13Component } from './feature91-component13.component';

describe('Feature91Component13Component', () => {
  let component: Feature91Component13Component;
  let fixture: ComponentFixture<Feature91Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
