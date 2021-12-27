import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component1Component } from './feature91-component1.component';

describe('Feature91Component1Component', () => {
  let component: Feature91Component1Component;
  let fixture: ComponentFixture<Feature91Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
