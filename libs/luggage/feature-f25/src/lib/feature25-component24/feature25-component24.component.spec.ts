import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component24Component } from './feature25-component24.component';

describe('Feature25Component24Component', () => {
  let component: Feature25Component24Component;
  let fixture: ComponentFixture<Feature25Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
