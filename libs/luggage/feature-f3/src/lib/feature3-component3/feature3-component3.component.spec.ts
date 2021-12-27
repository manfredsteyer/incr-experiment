import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component3Component } from './feature3-component3.component';

describe('Feature3Component3Component', () => {
  let component: Feature3Component3Component;
  let fixture: ComponentFixture<Feature3Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
