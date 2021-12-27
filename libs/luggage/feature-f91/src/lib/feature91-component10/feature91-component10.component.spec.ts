import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component10Component } from './feature91-component10.component';

describe('Feature91Component10Component', () => {
  let component: Feature91Component10Component;
  let fixture: ComponentFixture<Feature91Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
