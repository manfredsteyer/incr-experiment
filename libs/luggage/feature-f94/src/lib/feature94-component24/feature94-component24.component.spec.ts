import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component24Component } from './feature94-component24.component';

describe('Feature94Component24Component', () => {
  let component: Feature94Component24Component;
  let fixture: ComponentFixture<Feature94Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
