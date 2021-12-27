import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component18Component } from './feature64-component18.component';

describe('Feature64Component18Component', () => {
  let component: Feature64Component18Component;
  let fixture: ComponentFixture<Feature64Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
