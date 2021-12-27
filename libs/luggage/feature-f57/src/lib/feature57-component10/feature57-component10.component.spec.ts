import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component10Component } from './feature57-component10.component';

describe('Feature57Component10Component', () => {
  let component: Feature57Component10Component;
  let fixture: ComponentFixture<Feature57Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
