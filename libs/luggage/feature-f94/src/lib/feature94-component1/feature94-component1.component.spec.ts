import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component1Component } from './feature94-component1.component';

describe('Feature94Component1Component', () => {
  let component: Feature94Component1Component;
  let fixture: ComponentFixture<Feature94Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
