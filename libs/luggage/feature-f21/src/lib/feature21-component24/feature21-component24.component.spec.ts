import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component24Component } from './feature21-component24.component';

describe('Feature21Component24Component', () => {
  let component: Feature21Component24Component;
  let fixture: ComponentFixture<Feature21Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
