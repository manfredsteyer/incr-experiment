import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component23Component } from './feature74-component23.component';

describe('Feature74Component23Component', () => {
  let component: Feature74Component23Component;
  let fixture: ComponentFixture<Feature74Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
