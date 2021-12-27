import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component1Component } from './feature57-component1.component';

describe('Feature57Component1Component', () => {
  let component: Feature57Component1Component;
  let fixture: ComponentFixture<Feature57Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
