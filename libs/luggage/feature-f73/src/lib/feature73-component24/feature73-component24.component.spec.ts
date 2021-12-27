import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component24Component } from './feature73-component24.component';

describe('Feature73Component24Component', () => {
  let component: Feature73Component24Component;
  let fixture: ComponentFixture<Feature73Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
