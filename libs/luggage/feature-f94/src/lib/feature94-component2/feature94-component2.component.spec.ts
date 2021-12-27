import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component2Component } from './feature94-component2.component';

describe('Feature94Component2Component', () => {
  let component: Feature94Component2Component;
  let fixture: ComponentFixture<Feature94Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
