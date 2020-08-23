import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component13Component } from './feature11-component13.component';

describe('Feature11Component13Component', () => {
  let component: Feature11Component13Component;
  let fixture: ComponentFixture<Feature11Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
