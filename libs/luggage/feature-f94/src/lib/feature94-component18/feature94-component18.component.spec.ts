import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component18Component } from './feature94-component18.component';

describe('Feature94Component18Component', () => {
  let component: Feature94Component18Component;
  let fixture: ComponentFixture<Feature94Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
