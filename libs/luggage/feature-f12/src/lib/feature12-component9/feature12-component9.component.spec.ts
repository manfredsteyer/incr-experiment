import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component9Component } from './feature12-component9.component';

describe('Feature12Component9Component', () => {
  let component: Feature12Component9Component;
  let fixture: ComponentFixture<Feature12Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
