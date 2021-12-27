import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component24Component } from './feature55-component24.component';

describe('Feature55Component24Component', () => {
  let component: Feature55Component24Component;
  let fixture: ComponentFixture<Feature55Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
