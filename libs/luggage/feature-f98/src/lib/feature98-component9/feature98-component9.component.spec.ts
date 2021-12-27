import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component9Component } from './feature98-component9.component';

describe('Feature98Component9Component', () => {
  let component: Feature98Component9Component;
  let fixture: ComponentFixture<Feature98Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
