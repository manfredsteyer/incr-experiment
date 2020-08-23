import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component24Component } from './feature11-component24.component';

describe('Feature11Component24Component', () => {
  let component: Feature11Component24Component;
  let fixture: ComponentFixture<Feature11Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
