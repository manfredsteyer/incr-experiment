import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component9Component } from './feature5-component9.component';

describe('Feature5Component9Component', () => {
  let component: Feature5Component9Component;
  let fixture: ComponentFixture<Feature5Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
