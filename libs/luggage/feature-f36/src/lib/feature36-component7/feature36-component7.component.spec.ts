import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component7Component } from './feature36-component7.component';

describe('Feature36Component7Component', () => {
  let component: Feature36Component7Component;
  let fixture: ComponentFixture<Feature36Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
