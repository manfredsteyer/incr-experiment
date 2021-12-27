import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component0Component } from './feature33-component0.component';

describe('Feature33Component0Component', () => {
  let component: Feature33Component0Component;
  let fixture: ComponentFixture<Feature33Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
