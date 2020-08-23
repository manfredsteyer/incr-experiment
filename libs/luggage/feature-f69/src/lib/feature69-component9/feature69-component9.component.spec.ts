import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component9Component } from './feature69-component9.component';

describe('Feature69Component9Component', () => {
  let component: Feature69Component9Component;
  let fixture: ComponentFixture<Feature69Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
