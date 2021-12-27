import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component21Component } from './feature21-component21.component';

describe('Feature21Component21Component', () => {
  let component: Feature21Component21Component;
  let fixture: ComponentFixture<Feature21Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
