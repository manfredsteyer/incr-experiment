import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component9Component } from './feature6-component9.component';

describe('Feature6Component9Component', () => {
  let component: Feature6Component9Component;
  let fixture: ComponentFixture<Feature6Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
