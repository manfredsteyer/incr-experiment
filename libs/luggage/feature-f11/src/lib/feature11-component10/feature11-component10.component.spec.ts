import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component10Component } from './feature11-component10.component';

describe('Feature11Component10Component', () => {
  let component: Feature11Component10Component;
  let fixture: ComponentFixture<Feature11Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
