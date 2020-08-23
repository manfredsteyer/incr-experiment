import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component0Component } from './feature74-component0.component';

describe('Feature74Component0Component', () => {
  let component: Feature74Component0Component;
  let fixture: ComponentFixture<Feature74Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
