import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component9Component } from './feature26-component9.component';

describe('Feature26Component9Component', () => {
  let component: Feature26Component9Component;
  let fixture: ComponentFixture<Feature26Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
