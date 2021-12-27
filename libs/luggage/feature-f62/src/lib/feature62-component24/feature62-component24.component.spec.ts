import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component24Component } from './feature62-component24.component';

describe('Feature62Component24Component', () => {
  let component: Feature62Component24Component;
  let fixture: ComponentFixture<Feature62Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
