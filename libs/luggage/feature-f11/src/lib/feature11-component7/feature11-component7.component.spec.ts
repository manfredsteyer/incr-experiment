import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component7Component } from './feature11-component7.component';

describe('Feature11Component7Component', () => {
  let component: Feature11Component7Component;
  let fixture: ComponentFixture<Feature11Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
