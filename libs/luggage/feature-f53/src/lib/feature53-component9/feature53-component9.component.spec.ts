import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component9Component } from './feature53-component9.component';

describe('Feature53Component9Component', () => {
  let component: Feature53Component9Component;
  let fixture: ComponentFixture<Feature53Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
