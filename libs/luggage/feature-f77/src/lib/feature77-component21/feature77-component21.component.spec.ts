import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component21Component } from './feature77-component21.component';

describe('Feature77Component21Component', () => {
  let component: Feature77Component21Component;
  let fixture: ComponentFixture<Feature77Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
