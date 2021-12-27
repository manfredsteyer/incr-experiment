import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component11Component } from './feature88-component11.component';

describe('Feature88Component11Component', () => {
  let component: Feature88Component11Component;
  let fixture: ComponentFixture<Feature88Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
