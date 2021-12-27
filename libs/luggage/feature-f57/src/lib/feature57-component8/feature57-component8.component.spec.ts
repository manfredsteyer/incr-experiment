import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component8Component } from './feature57-component8.component';

describe('Feature57Component8Component', () => {
  let component: Feature57Component8Component;
  let fixture: ComponentFixture<Feature57Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
