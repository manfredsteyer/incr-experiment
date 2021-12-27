import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component1Component } from './feature3-component1.component';

describe('Feature3Component1Component', () => {
  let component: Feature3Component1Component;
  let fixture: ComponentFixture<Feature3Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
