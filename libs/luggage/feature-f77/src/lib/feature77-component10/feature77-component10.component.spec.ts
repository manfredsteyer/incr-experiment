import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component10Component } from './feature77-component10.component';

describe('Feature77Component10Component', () => {
  let component: Feature77Component10Component;
  let fixture: ComponentFixture<Feature77Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
