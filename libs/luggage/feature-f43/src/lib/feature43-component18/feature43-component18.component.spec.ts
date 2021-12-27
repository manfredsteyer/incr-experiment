import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component18Component } from './feature43-component18.component';

describe('Feature43Component18Component', () => {
  let component: Feature43Component18Component;
  let fixture: ComponentFixture<Feature43Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
