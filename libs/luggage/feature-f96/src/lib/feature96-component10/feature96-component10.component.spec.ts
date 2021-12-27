import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component10Component } from './feature96-component10.component';

describe('Feature96Component10Component', () => {
  let component: Feature96Component10Component;
  let fixture: ComponentFixture<Feature96Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
