import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component7Component } from './feature77-component7.component';

describe('Feature77Component7Component', () => {
  let component: Feature77Component7Component;
  let fixture: ComponentFixture<Feature77Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
