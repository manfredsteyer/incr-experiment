import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component11Component } from './feature39-component11.component';

describe('Feature39Component11Component', () => {
  let component: Feature39Component11Component;
  let fixture: ComponentFixture<Feature39Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
