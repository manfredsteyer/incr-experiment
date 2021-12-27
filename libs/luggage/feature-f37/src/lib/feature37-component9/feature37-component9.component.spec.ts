import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component9Component } from './feature37-component9.component';

describe('Feature37Component9Component', () => {
  let component: Feature37Component9Component;
  let fixture: ComponentFixture<Feature37Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
