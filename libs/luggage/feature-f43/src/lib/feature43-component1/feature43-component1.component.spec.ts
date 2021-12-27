import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component1Component } from './feature43-component1.component';

describe('Feature43Component1Component', () => {
  let component: Feature43Component1Component;
  let fixture: ComponentFixture<Feature43Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
