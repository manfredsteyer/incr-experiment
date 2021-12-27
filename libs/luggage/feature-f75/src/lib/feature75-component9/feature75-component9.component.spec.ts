import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component9Component } from './feature75-component9.component';

describe('Feature75Component9Component', () => {
  let component: Feature75Component9Component;
  let fixture: ComponentFixture<Feature75Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
