import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component9Component } from './feature15-component9.component';

describe('Feature15Component9Component', () => {
  let component: Feature15Component9Component;
  let fixture: ComponentFixture<Feature15Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});