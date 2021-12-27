import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component7Component } from './feature21-component7.component';

describe('Feature21Component7Component', () => {
  let component: Feature21Component7Component;
  let fixture: ComponentFixture<Feature21Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
