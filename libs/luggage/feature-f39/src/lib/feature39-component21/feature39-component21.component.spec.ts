import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component21Component } from './feature39-component21.component';

describe('Feature39Component21Component', () => {
  let component: Feature39Component21Component;
  let fixture: ComponentFixture<Feature39Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
