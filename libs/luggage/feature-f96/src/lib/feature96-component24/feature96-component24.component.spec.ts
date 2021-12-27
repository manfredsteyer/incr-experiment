import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component24Component } from './feature96-component24.component';

describe('Feature96Component24Component', () => {
  let component: Feature96Component24Component;
  let fixture: ComponentFixture<Feature96Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
