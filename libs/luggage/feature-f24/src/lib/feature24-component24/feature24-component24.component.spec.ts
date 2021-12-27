import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component24Component } from './feature24-component24.component';

describe('Feature24Component24Component', () => {
  let component: Feature24Component24Component;
  let fixture: ComponentFixture<Feature24Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
