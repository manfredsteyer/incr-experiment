import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component21Component } from './feature36-component21.component';

describe('Feature36Component21Component', () => {
  let component: Feature36Component21Component;
  let fixture: ComponentFixture<Feature36Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
