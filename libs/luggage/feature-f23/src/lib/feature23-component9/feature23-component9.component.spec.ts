import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component9Component } from './feature23-component9.component';

describe('Feature23Component9Component', () => {
  let component: Feature23Component9Component;
  let fixture: ComponentFixture<Feature23Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
