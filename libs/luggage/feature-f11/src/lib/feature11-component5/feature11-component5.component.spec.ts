import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component5Component } from './feature11-component5.component';

describe('Feature11Component5Component', () => {
  let component: Feature11Component5Component;
  let fixture: ComponentFixture<Feature11Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
