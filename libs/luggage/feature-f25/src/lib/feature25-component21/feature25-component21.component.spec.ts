import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component21Component } from './feature25-component21.component';

describe('Feature25Component21Component', () => {
  let component: Feature25Component21Component;
  let fixture: ComponentFixture<Feature25Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
