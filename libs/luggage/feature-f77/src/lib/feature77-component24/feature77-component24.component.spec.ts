import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component24Component } from './feature77-component24.component';

describe('Feature77Component24Component', () => {
  let component: Feature77Component24Component;
  let fixture: ComponentFixture<Feature77Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
