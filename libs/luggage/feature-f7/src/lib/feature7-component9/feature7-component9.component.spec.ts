import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component9Component } from './feature7-component9.component';

describe('Feature7Component9Component', () => {
  let component: Feature7Component9Component;
  let fixture: ComponentFixture<Feature7Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
