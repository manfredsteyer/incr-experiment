import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component9Component } from './feature33-component9.component';

describe('Feature33Component9Component', () => {
  let component: Feature33Component9Component;
  let fixture: ComponentFixture<Feature33Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
