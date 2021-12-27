import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component11Component } from './feature0-component11.component';

describe('Feature0Component11Component', () => {
  let component: Feature0Component11Component;
  let fixture: ComponentFixture<Feature0Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
