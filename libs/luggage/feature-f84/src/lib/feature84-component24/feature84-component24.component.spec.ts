import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component24Component } from './feature84-component24.component';

describe('Feature84Component24Component', () => {
  let component: Feature84Component24Component;
  let fixture: ComponentFixture<Feature84Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
