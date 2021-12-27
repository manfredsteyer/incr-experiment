import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component14Component } from './feature91-component14.component';

describe('Feature91Component14Component', () => {
  let component: Feature91Component14Component;
  let fixture: ComponentFixture<Feature91Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
