import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component24Component } from './feature15-component24.component';

describe('Feature15Component24Component', () => {
  let component: Feature15Component24Component;
  let fixture: ComponentFixture<Feature15Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
