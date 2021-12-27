import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component14Component } from './feature11-component14.component';

describe('Feature11Component14Component', () => {
  let component: Feature11Component14Component;
  let fixture: ComponentFixture<Feature11Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
