import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component10Component } from './feature21-component10.component';

describe('Feature21Component10Component', () => {
  let component: Feature21Component10Component;
  let fixture: ComponentFixture<Feature21Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
