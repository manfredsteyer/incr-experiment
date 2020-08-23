import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component9Component } from './feature11-component9.component';

describe('Feature11Component9Component', () => {
  let component: Feature11Component9Component;
  let fixture: ComponentFixture<Feature11Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
