import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component7Component } from './feature91-component7.component';

describe('Feature91Component7Component', () => {
  let component: Feature91Component7Component;
  let fixture: ComponentFixture<Feature91Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
