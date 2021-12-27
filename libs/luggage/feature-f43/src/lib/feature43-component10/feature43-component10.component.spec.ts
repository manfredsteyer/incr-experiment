import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component10Component } from './feature43-component10.component';

describe('Feature43Component10Component', () => {
  let component: Feature43Component10Component;
  let fixture: ComponentFixture<Feature43Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
