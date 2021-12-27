import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component0Component } from './feature0-component0.component';

describe('Feature0Component0Component', () => {
  let component: Feature0Component0Component;
  let fixture: ComponentFixture<Feature0Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
