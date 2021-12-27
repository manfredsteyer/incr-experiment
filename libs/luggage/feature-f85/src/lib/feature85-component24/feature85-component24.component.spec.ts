import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component24Component } from './feature85-component24.component';

describe('Feature85Component24Component', () => {
  let component: Feature85Component24Component;
  let fixture: ComponentFixture<Feature85Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
