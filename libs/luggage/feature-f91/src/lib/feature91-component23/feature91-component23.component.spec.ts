import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component23Component } from './feature91-component23.component';

describe('Feature91Component23Component', () => {
  let component: Feature91Component23Component;
  let fixture: ComponentFixture<Feature91Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
