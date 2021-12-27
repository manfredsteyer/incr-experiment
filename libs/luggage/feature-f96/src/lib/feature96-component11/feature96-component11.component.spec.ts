import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component11Component } from './feature96-component11.component';

describe('Feature96Component11Component', () => {
  let component: Feature96Component11Component;
  let fixture: ComponentFixture<Feature96Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
