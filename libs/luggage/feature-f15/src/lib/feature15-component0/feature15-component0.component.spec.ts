import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component0Component } from './feature15-component0.component';

describe('Feature15Component0Component', () => {
  let component: Feature15Component0Component;
  let fixture: ComponentFixture<Feature15Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
