import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component29Component } from './feature57-component29.component';

describe('Feature57Component29Component', () => {
  let component: Feature57Component29Component;
  let fixture: ComponentFixture<Feature57Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
