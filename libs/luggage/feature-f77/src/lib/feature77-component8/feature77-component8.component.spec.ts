import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component8Component } from './feature77-component8.component';

describe('Feature77Component8Component', () => {
  let component: Feature77Component8Component;
  let fixture: ComponentFixture<Feature77Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
