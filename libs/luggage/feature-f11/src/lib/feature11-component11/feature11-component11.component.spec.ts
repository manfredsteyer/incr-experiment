import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component11Component } from './feature11-component11.component';

describe('Feature11Component11Component', () => {
  let component: Feature11Component11Component;
  let fixture: ComponentFixture<Feature11Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
