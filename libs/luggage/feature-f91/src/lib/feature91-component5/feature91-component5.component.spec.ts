import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component5Component } from './feature91-component5.component';

describe('Feature91Component5Component', () => {
  let component: Feature91Component5Component;
  let fixture: ComponentFixture<Feature91Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
