import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component7Component } from './feature51-component7.component';

describe('Feature51Component7Component', () => {
  let component: Feature51Component7Component;
  let fixture: ComponentFixture<Feature51Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
