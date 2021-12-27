import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component9Component } from './feature86-component9.component';

describe('Feature86Component9Component', () => {
  let component: Feature86Component9Component;
  let fixture: ComponentFixture<Feature86Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
