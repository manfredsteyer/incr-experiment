import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component24Component } from './feature10-component24.component';

describe('Feature10Component24Component', () => {
  let component: Feature10Component24Component;
  let fixture: ComponentFixture<Feature10Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
