import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component11Component } from './feature18-component11.component';

describe('Feature18Component11Component', () => {
  let component: Feature18Component11Component;
  let fixture: ComponentFixture<Feature18Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
