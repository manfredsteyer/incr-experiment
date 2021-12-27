import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component20Component } from './feature31-component20.component';

describe('Feature31Component20Component', () => {
  let component: Feature31Component20Component;
  let fixture: ComponentFixture<Feature31Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
