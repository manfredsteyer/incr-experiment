import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component0Component } from './feature11-component0.component';

describe('Feature11Component0Component', () => {
  let component: Feature11Component0Component;
  let fixture: ComponentFixture<Feature11Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
