import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component29Component } from './feature52-component29.component';

describe('Feature52Component29Component', () => {
  let component: Feature52Component29Component;
  let fixture: ComponentFixture<Feature52Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
