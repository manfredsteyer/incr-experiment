import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component9Component } from './feature38-component9.component';

describe('Feature38Component9Component', () => {
  let component: Feature38Component9Component;
  let fixture: ComponentFixture<Feature38Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
