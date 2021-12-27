import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component24Component } from './feature50-component24.component';

describe('Feature50Component24Component', () => {
  let component: Feature50Component24Component;
  let fixture: ComponentFixture<Feature50Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
