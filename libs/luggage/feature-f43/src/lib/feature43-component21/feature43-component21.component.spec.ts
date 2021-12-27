import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component21Component } from './feature43-component21.component';

describe('Feature43Component21Component', () => {
  let component: Feature43Component21Component;
  let fixture: ComponentFixture<Feature43Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
