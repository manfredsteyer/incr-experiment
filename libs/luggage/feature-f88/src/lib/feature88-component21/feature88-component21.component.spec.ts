import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component21Component } from './feature88-component21.component';

describe('Feature88Component21Component', () => {
  let component: Feature88Component21Component;
  let fixture: ComponentFixture<Feature88Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
