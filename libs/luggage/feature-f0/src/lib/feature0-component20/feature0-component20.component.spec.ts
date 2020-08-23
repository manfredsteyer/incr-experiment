import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component20Component } from './feature0-component20.component';

describe('Feature0Component20Component', () => {
  let component: Feature0Component20Component;
  let fixture: ComponentFixture<Feature0Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
