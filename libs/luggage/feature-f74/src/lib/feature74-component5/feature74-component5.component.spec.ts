import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component5Component } from './feature74-component5.component';

describe('Feature74Component5Component', () => {
  let component: Feature74Component5Component;
  let fixture: ComponentFixture<Feature74Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
