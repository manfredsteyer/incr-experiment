import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component9Component } from './feature58-component9.component';

describe('Feature58Component9Component', () => {
  let component: Feature58Component9Component;
  let fixture: ComponentFixture<Feature58Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
