import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component21Component } from './feature74-component21.component';

describe('Feature74Component21Component', () => {
  let component: Feature74Component21Component;
  let fixture: ComponentFixture<Feature74Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
