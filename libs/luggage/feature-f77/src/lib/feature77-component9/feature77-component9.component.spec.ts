import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component9Component } from './feature77-component9.component';

describe('Feature77Component9Component', () => {
  let component: Feature77Component9Component;
  let fixture: ComponentFixture<Feature77Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
