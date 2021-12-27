import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component5Component } from './feature57-component5.component';

describe('Feature57Component5Component', () => {
  let component: Feature57Component5Component;
  let fixture: ComponentFixture<Feature57Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
