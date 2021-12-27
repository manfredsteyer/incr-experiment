import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component11Component } from './feature32-component11.component';

describe('Feature32Component11Component', () => {
  let component: Feature32Component11Component;
  let fixture: ComponentFixture<Feature32Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
