import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component28Component } from './feature52-component28.component';

describe('Feature52Component28Component', () => {
  let component: Feature52Component28Component;
  let fixture: ComponentFixture<Feature52Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
