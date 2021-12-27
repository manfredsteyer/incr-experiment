import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component10Component } from './feature38-component10.component';

describe('Feature38Component10Component', () => {
  let component: Feature38Component10Component;
  let fixture: ComponentFixture<Feature38Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
