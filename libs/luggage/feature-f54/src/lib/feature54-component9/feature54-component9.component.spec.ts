import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component9Component } from './feature54-component9.component';

describe('Feature54Component9Component', () => {
  let component: Feature54Component9Component;
  let fixture: ComponentFixture<Feature54Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});