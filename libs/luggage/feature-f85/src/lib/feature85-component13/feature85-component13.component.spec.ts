import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component13Component } from './feature85-component13.component';

describe('Feature85Component13Component', () => {
  let component: Feature85Component13Component;
  let fixture: ComponentFixture<Feature85Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
