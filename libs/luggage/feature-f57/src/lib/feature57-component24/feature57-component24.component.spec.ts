import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component24Component } from './feature57-component24.component';

describe('Feature57Component24Component', () => {
  let component: Feature57Component24Component;
  let fixture: ComponentFixture<Feature57Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
