import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component9Component } from './feature81-component9.component';

describe('Feature81Component9Component', () => {
  let component: Feature81Component9Component;
  let fixture: ComponentFixture<Feature81Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
