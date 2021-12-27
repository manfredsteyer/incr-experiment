import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component23Component } from './feature77-component23.component';

describe('Feature77Component23Component', () => {
  let component: Feature77Component23Component;
  let fixture: ComponentFixture<Feature77Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
