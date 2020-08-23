import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component0Component } from './feature39-component0.component';

describe('Feature39Component0Component', () => {
  let component: Feature39Component0Component;
  let fixture: ComponentFixture<Feature39Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
