import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component0Component } from './feature88-component0.component';

describe('Feature88Component0Component', () => {
  let component: Feature88Component0Component;
  let fixture: ComponentFixture<Feature88Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
