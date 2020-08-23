import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component0Component } from './feature3-component0.component';

describe('Feature3Component0Component', () => {
  let component: Feature3Component0Component;
  let fixture: ComponentFixture<Feature3Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
