import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component24Component } from './feature51-component24.component';

describe('Feature51Component24Component', () => {
  let component: Feature51Component24Component;
  let fixture: ComponentFixture<Feature51Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
