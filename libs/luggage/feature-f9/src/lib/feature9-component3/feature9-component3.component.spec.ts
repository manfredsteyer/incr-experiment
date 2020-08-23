import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component3Component } from './feature9-component3.component';

describe('Feature9Component3Component', () => {
  let component: Feature9Component3Component;
  let fixture: ComponentFixture<Feature9Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature9Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
