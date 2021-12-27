import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component11Component } from './feature14-component11.component';

describe('Feature14Component11Component', () => {
  let component: Feature14Component11Component;
  let fixture: ComponentFixture<Feature14Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
