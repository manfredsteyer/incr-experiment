import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component18Component } from './feature11-component18.component';

describe('Feature11Component18Component', () => {
  let component: Feature11Component18Component;
  let fixture: ComponentFixture<Feature11Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
