import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component10Component } from './feature89-component10.component';

describe('Feature89Component10Component', () => {
  let component: Feature89Component10Component;
  let fixture: ComponentFixture<Feature89Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
