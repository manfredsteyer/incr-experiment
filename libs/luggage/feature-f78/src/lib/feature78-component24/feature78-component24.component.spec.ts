import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component24Component } from './feature78-component24.component';

describe('Feature78Component24Component', () => {
  let component: Feature78Component24Component;
  let fixture: ComponentFixture<Feature78Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
