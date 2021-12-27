import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component24Component } from './feature2-component24.component';

describe('Feature2Component24Component', () => {
  let component: Feature2Component24Component;
  let fixture: ComponentFixture<Feature2Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
