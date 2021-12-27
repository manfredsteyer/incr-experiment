import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component1Component } from './feature11-component1.component';

describe('Feature11Component1Component', () => {
  let component: Feature11Component1Component;
  let fixture: ComponentFixture<Feature11Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
