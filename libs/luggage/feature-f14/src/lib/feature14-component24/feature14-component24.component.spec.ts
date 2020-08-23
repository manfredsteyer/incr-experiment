import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component24Component } from './feature14-component24.component';

describe('Feature14Component24Component', () => {
  let component: Feature14Component24Component;
  let fixture: ComponentFixture<Feature14Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
