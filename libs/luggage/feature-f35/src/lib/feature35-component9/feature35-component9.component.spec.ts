import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component9Component } from './feature35-component9.component';

describe('Feature35Component9Component', () => {
  let component: Feature35Component9Component;
  let fixture: ComponentFixture<Feature35Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
