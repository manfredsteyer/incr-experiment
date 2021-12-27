import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component14Component } from './feature0-component14.component';

describe('Feature0Component14Component', () => {
  let component: Feature0Component14Component;
  let fixture: ComponentFixture<Feature0Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
