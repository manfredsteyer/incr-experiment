import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component8Component } from './feature91-component8.component';

describe('Feature91Component8Component', () => {
  let component: Feature91Component8Component;
  let fixture: ComponentFixture<Feature91Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
