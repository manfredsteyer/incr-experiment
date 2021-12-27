import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component7Component } from './feature18-component7.component';

describe('Feature18Component7Component', () => {
  let component: Feature18Component7Component;
  let fixture: ComponentFixture<Feature18Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
