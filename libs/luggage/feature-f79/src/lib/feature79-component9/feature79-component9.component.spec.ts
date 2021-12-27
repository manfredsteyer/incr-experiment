import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component9Component } from './feature79-component9.component';

describe('Feature79Component9Component', () => {
  let component: Feature79Component9Component;
  let fixture: ComponentFixture<Feature79Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
