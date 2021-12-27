import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component24Component } from './feature18-component24.component';

describe('Feature18Component24Component', () => {
  let component: Feature18Component24Component;
  let fixture: ComponentFixture<Feature18Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
