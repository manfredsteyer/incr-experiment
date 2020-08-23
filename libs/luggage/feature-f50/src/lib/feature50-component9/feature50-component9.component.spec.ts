import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component9Component } from './feature50-component9.component';

describe('Feature50Component9Component', () => {
  let component: Feature50Component9Component;
  let fixture: ComponentFixture<Feature50Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
