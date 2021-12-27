import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component0Component } from './feature77-component0.component';

describe('Feature77Component0Component', () => {
  let component: Feature77Component0Component;
  let fixture: ComponentFixture<Feature77Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
