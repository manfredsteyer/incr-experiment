import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component18Component } from './feature89-component18.component';

describe('Feature89Component18Component', () => {
  let component: Feature89Component18Component;
  let fixture: ComponentFixture<Feature89Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
