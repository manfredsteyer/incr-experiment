import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component9Component } from './feature71-component9.component';

describe('Feature71Component9Component', () => {
  let component: Feature71Component9Component;
  let fixture: ComponentFixture<Feature71Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
