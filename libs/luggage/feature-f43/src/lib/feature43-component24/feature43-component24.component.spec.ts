import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component24Component } from './feature43-component24.component';

describe('Feature43Component24Component', () => {
  let component: Feature43Component24Component;
  let fixture: ComponentFixture<Feature43Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
