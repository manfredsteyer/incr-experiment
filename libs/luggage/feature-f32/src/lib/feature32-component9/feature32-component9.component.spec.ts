import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component9Component } from './feature32-component9.component';

describe('Feature32Component9Component', () => {
  let component: Feature32Component9Component;
  let fixture: ComponentFixture<Feature32Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
