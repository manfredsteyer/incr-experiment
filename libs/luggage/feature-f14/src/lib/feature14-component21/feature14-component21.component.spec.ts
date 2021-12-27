import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component21Component } from './feature14-component21.component';

describe('Feature14Component21Component', () => {
  let component: Feature14Component21Component;
  let fixture: ComponentFixture<Feature14Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
