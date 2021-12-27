import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component10Component } from './feature94-component10.component';

describe('Feature94Component10Component', () => {
  let component: Feature94Component10Component;
  let fixture: ComponentFixture<Feature94Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
