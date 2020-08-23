import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component7Component } from './feature0-component7.component';

describe('Feature0Component7Component', () => {
  let component: Feature0Component7Component;
  let fixture: ComponentFixture<Feature0Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
