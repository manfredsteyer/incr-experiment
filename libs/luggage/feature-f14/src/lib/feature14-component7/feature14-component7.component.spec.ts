import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component7Component } from './feature14-component7.component';

describe('Feature14Component7Component', () => {
  let component: Feature14Component7Component;
  let fixture: ComponentFixture<Feature14Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
