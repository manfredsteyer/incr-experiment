import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component28Component } from './feature77-component28.component';

describe('Feature77Component28Component', () => {
  let component: Feature77Component28Component;
  let fixture: ComponentFixture<Feature77Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
