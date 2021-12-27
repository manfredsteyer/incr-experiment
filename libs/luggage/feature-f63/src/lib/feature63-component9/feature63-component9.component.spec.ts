import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component9Component } from './feature63-component9.component';

describe('Feature63Component9Component', () => {
  let component: Feature63Component9Component;
  let fixture: ComponentFixture<Feature63Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
