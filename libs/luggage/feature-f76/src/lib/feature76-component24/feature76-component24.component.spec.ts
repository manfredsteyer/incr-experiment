import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component24Component } from './feature76-component24.component';

describe('Feature76Component24Component', () => {
  let component: Feature76Component24Component;
  let fixture: ComponentFixture<Feature76Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
