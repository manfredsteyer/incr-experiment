import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component9Component } from './feature91-component9.component';

describe('Feature91Component9Component', () => {
  let component: Feature91Component9Component;
  let fixture: ComponentFixture<Feature91Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
