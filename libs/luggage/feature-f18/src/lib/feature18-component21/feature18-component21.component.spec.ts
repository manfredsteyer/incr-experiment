import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component21Component } from './feature18-component21.component';

describe('Feature18Component21Component', () => {
  let component: Feature18Component21Component;
  let fixture: ComponentFixture<Feature18Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
