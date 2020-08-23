import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component9Component } from './feature27-component9.component';

describe('Feature27Component9Component', () => {
  let component: Feature27Component9Component;
  let fixture: ComponentFixture<Feature27Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
