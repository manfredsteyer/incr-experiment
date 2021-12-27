import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component3Component } from './feature74-component3.component';

describe('Feature74Component3Component', () => {
  let component: Feature74Component3Component;
  let fixture: ComponentFixture<Feature74Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
